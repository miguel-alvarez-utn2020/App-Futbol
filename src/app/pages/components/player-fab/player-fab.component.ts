import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-fab',
  templateUrl: './player-fab.component.html',
  styleUrls: ['./player-fab.component.scss']
})
export class PlayerFabComponent {
  @Input() side: string = 'bottom'
}
