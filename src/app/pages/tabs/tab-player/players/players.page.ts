import { Component } from '@angular/core';
import { PLAYERS } from './examples/examples';

@Component({
  selector: 'app-players',
  templateUrl: 'players.page.html',
  styleUrls: ['players.page.scss']
})
export class PlayersPage {
  players = PLAYERS
  constructor() {}

}
