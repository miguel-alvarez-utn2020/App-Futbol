import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/shared/modal.service';
import { RegisterGroupComponent } from '../../components/register-group/register-group.component';
import { PopoverService } from 'src/app/services/shared/popover.service';
import { JoinGroupComponent } from '../../components/join-group/join-group.component';
import { Group } from '../../domain/models/Group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  groupList: Group[] = []
  constructor(private modalService: ModalService, private popoverService: PopoverService, private router: Router) {}

  ngOnInit(): void {

  }

  showRegisterGroupModal(){
    this.modalService.showModal(RegisterGroupComponent, {})
  }

  showPopoverJoinGroup(){
    this.popoverService.showPopover(JoinGroupComponent)
  }

  deleteGroup = (group: Group | any) => {
    console.log('deleted group', group);
  }

  goToGroup(group){
    console.log('go to group', group);
    this.router.navigate(['/group/dashboard/start'])
  }
}
