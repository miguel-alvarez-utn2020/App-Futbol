import { Component, OnInit, inject, signal } from '@angular/core';
import { PLAYERS } from './examples/examples';
import { Player, Valorization } from 'src/app/pages/domain/models/Player';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { selectGroupPlayers, selectGroupAdmins, selectActiveGroup, selectUser, languageSelected, selectValorizerPlayers, selectPlayerCreatorGroup } from '@app/state/selectors'
import { Group } from 'src/app/pages/domain/models/Group';
import { User } from 'src/app/pages/domain/models/User';
import { TranslateService } from '@ngx-translate/core';
import { sendAdmin } from '@app/state/actions';
import { AlertService } from 'src/app/services/shared/alert.service';
import { UtilsService } from 'src/app/pages/services/utils.service';
import { ModalService } from 'src/app/services/shared/modal.service';
import { QuestionsPlayerValueComponent } from 'src/app/pages/components/questions-player-value/questions-player-value.component';
@Component({
  selector: 'app-players',
  templateUrl: 'players.page.html',
  styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit{
  private store = inject(Store<AppState>)
  private translate = inject(TranslateService);
  private alertService = inject(AlertService);
  private utilsService = inject(UtilsService);
  private modalService = inject(ModalService);
  players = signal<Player[] | null>([]);
  adminsPlayers = signal<string[]>([])
  activeGroup = signal<Group>({} as Group);
  user = signal<User>({} as User);
  valorizerPlayers = signal<string[]>([]);
  playerCreatorGroup = signal<Player>({} as Player);
  constructor() {}

  ngOnInit(): void {
    this.loadPlayers();
    this.loadLenguage();
    this.loadActiveGroup();
    this.loadUserData();
    this.loadAdminsPlayers();
    this.loadValorizerPlayers();
    this.getPlayerCreatorgroup();
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

  loadValorizerPlayers(){
    this.store.select(selectValorizerPlayers).subscribe({
      next: (valorizerPlayer) => this.valorizerPlayers.set(valorizerPlayer)
    })
  }

  getPlayerCreatorgroup(){
    this.store.select(selectPlayerCreatorGroup).subscribe({
      next: (player)=> this.playerCreatorGroup.set(player)
    })
  }
  

  deletePlayer = (id: string) => {

  };

  setValuePlayer = (groupId: string, playerId: string) => {
    this.modalService.showModal(QuestionsPlayerValueComponent, {groupId, playerId}, false, 'questions-value')
  };

  sendAdmin = async (groupId: string, player: Player) => {
   this.utilsService.translateMessages(['alert.textOneForSendAdmin', 'alert.textTwoForSendAdmin', 'no', 'yes']).subscribe({
    next: async (messages) => {
      const [textOneForSendAdmin, textTwoForSendAdmin, no, yes] = messages;
      const textAlert = `${textOneForSendAdmin} ${player.user.name} ${player.user.lastname} ${textTwoForSendAdmin}`
      const resAnswer = await this.alertService.simpleAlertQuestion(textAlert, yes, no);
       if(resAnswer){
         this.store.dispatch(sendAdmin({groupId, playerId: player.id}))
       }
    }
   })
  };

}
