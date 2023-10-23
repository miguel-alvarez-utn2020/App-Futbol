import { Component, OnInit, inject, signal } from '@angular/core';
import { PLAYERS } from './examples/examples';
import { Player } from 'src/app/pages/domain/models/Player';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { selectGroupPlayers, selectGroupAdmins } from '@app/state/selectors'
@Component({
  selector: 'app-players',
  templateUrl: 'players.page.html',
  styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit{
  private store = inject(Store<AppState>)
  players = signal<Player[] | null>([]);
  adminsPlayers = signal<string[]>([])
  isAdminMap: { [playerId: string]: boolean } = {};
  constructor() {}

  ngOnInit(): void {
    this.loadPlayers();
    this.loadAdminsPlayers();
  }

  loadPlayers(){
    this.store.select(selectGroupPlayers).subscribe({
      next: (players: Player[]) => this.players.set(players)
    })
  }

  loadAdminsPlayers(){
    this.store.select(selectGroupAdmins).subscribe({
      next: (admins: string[]) => this.adminsPlayers.set(admins)
    })
  }

  isAdmin(playerId: string): boolean {
    console.log(playerId);
    return this.adminsPlayers().includes(playerId);
  }

}
