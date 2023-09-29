import { Component, Input } from '@angular/core';
import { Group } from '../../interfaces/Group';

@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss']
})
export class ItemGroupComponent {
  @Input() group: Group | any;
  @Input() fn = (group) => {};
}
