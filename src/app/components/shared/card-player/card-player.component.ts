import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent {
  @Input() imgUrl: string = ''
  @Input() player = {
    imgFace: 'assets/bale.png',
    playerName: 'Garet Bale',
    states:   [
      {
        stateLabel:'PAC',
        stateValue: 89 ,
        classCss: 'card-player__state-pac'
      },
      {
        stateLabel:'SHO',
        stateValue: 89 ,
        classCss: 'card-player__state-shot'
      },
      {
        stateLabel:'PAS',
        stateValue: 89 ,
        classCss: 'card-player__state-pas'
      },
      {
        stateLabel:'DRI',
        stateValue: 89 ,
        classCss: 'card-player__state-dri'
      },
      {
        stateLabel:'DEF',
        stateValue: 89 ,
        classCss: 'card-player__state-def'
      },
      {
        stateLabel:'PHY',
        stateValue: 89 ,
        classCss: 'card-player__state-phy'
      },
    ]
  }

}
