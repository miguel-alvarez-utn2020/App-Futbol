import { Component, Input } from '@angular/core';
import { Group } from '../../domain/models/Group';
import { Player } from '../../domain/models/Player';

@Component({
  selector: 'app-item-player',
  templateUrl: './item-player.component.html',
  styleUrls: ['./item-player.component.scss']
})
export class ItemPlayerComponent {
  @Input() player: Player;
  @Input() group: Group = {} as Group;
  @Input() userId: string = '';
  @Input() deletePlayer = (id: string) => {};
  @Input() setValuePlayer = (groupId: string, playerId: string) => {};
  @Input() sendAdmin = (groupId: string, playerId: Player) => {};
  isAdmin: boolean = false;
  noAdminId: string = '';

  ngOnInit(): void {
    this.isAdmin = this.group.admins.includes(this.player.user.id);
    this.noAdminId = this.group.admins.find(admins => admins !== this.player.id);
  }
}
