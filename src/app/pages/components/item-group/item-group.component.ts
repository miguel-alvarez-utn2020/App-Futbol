import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../domain/models/Group';

@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss']
})
export class ItemGroupComponent implements OnInit{
  
  @Input() group: Group;
  @Input() userId: string = '';
  @Input() deleteGoup = (id: string) => {};
  @Input() shareGroup = (codeGroup: string) => {};
  @Input() goToGroup = (groupId: string) => {};
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.isAdmin = this.group.admins.includes(this.userId);
  }

}
