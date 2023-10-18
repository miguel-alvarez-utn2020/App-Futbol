import { Component, OnInit, inject } from '@angular/core';
import { ModalService } from 'src/app/services/shared/modal.service';
import { RegisterGroupComponent } from '../../components/register-group/register-group.component';
import { PopoverService } from 'src/app/services/shared/popover.service';
import { JoinGroupComponent } from '../../components/join-group/join-group.component';
import { Group } from '../../domain/models/Group';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { USER } from '../../services/auth.service';
import { User } from '../../domain/models/User';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private modalService = inject(ModalService)
  private popoverService = inject(PopoverService)
  private router = inject(Router)
  private storageService = inject(StorageService)
  groupList: Group[] = []
  user: User;
  constructor() {}

  ngOnInit(): void {
    this.loadUserData();  
  }

  showRegisterGroupModal(){
    this.modalService.showModal(RegisterGroupComponent, {})
  }

  showPopoverJoinGroup(){
    this.popoverService.showPopover(JoinGroupComponent)
  }

  deleteGroup = (id: string) => {
    console.log('deleted group', id);
  }

  shareGroup = (codeGroup: string) => {
    console.log('share group', codeGroup);
  }

  goToGroup = (group: Group) =>{
    //TODO:cambiar por servicio de store ngrx
    this.storageService.setItem('activeGroup', group);
    this.router.navigate(['/group/dashboard/start']);
  }

  loadUserData(){
    this.user = this.storageService.getItem(USER);
    this.groupList = this.user.groups;
  }
}
