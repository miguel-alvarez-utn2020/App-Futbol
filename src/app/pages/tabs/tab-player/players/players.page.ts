import { Component, OnInit, inject, signal } from '@angular/core';
import { PLAYERS } from './examples/examples';
import { Player } from 'src/app/pages/domain/models/Player';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { selectGroupPlayers, selectGroupAdmins, selectActiveGroup, selectUser, languageSelected } from '@app/state/selectors'
import { Group } from 'src/app/pages/domain/models/Group';
import { User } from 'src/app/pages/domain/models/User';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-players',
  templateUrl: 'players.page.html',
  styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit{
  private store = inject(Store<AppState>)
  private translate = inject(TranslateService);
  players = signal<Player[] | null>([]);
  adminsPlayers = signal<string[]>([])
  activeGroup = signal<Group>({} as Group);
  user = signal<User>({} as User);
  constructor() {}

  ngOnInit(): void {
    this.loadPlayers();
    this.loadLenguage();
    this.loadActiveGroup();
    this.loadUserData();
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

  loadActiveGroup(){
    this.store.select(selectActiveGroup).subscribe({
      next: (groups: Group) => this.activeGroup.set(groups)
    })
  }

  loadUserData(){
    this.store.select(selectUser).subscribe({
      next: ({user}) => this.user.set(user)
    })
  }

  loadLenguage() {
    this.store.select(languageSelected).subscribe({
      next: ({ language }) => {
        this.translate.use(language);
      },
    });
  }

  

}
