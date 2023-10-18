import { Component, Input } from '@angular/core';
import { Group } from '../../domain/models/Group';

@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss']
})
export class ItemGroupComponent {
  @Input() group: Group;
  @Input() deleteGoup = (id: string) => {};
  @Input() shareGroup = (codeGroup: string) => {};
  @Input() goToGroup = (id: string) => {};


}
