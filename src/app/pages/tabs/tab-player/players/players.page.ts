import { Component, OnInit, inject, signal } from '@angular/core';
import { PLAYERS } from './examples/examples';
import { Player } from 'src/app/pages/domain/models/Player';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { selectGroupPlayers } from '@app/state/selectors'
@Component({
  selector: 'app-players',
  templateUrl: 'players.page.html',
  styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit{
  private store = inject(Store<AppState>)
  players = signal<Player[] | null>([]);
  constructor() {
 
  }

  ngOnInit(): void {
    console.log('players');
    
    this.store.select(selectGroupPlayers).subscribe({
      next: (players: Player[]) => {
        if(players){
          this.players.set(players)
        }
      },
      error: (err: any) => console.log(err)
    })
  }

}
