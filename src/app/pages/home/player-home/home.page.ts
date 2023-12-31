import { Component, OnInit, inject, signal } from '@angular/core';
import { ModalService } from 'src/app/services/shared/modal.service';
import { RegisterGroupComponent } from '../../components/register-group/register-group.component';
import { PopoverService } from 'src/app/services/shared/popover.service';
import { JoinGroupComponent } from '../../components/join-group/join-group.component';
import { Group } from '../../domain/models/Group';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { User } from '../../domain/models/User';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { TranslateService } from '@ngx-translate/core';
import { selectUser, languageSelected } from '@app/state/selectors';
import { selectGroup } from '@app/state/actions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private modalService = inject(ModalService);
  private popoverService = inject(PopoverService);
  private router = inject(Router);
  private store = inject(Store<AppState>);
  private translate = inject(TranslateService);
  groupList = signal<Group[]>([]);
  user = signal<User>({} as User);
  imgUrl = 'assets/avatar.png'
  constructor() {}

  ngOnInit(): void {
    this.loadUserData();
    this.loadLenguage();
  }

  loadUserData(){
    this.store.select(selectUser).subscribe({
      next: ({user}) => {
        if(user){
          this.groupList.set(user.groups);
          this.user.set(user);
        }
      }
    })
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

  loadLenguage() {
    this.store.select(languageSelected).subscribe({
      next: ({ language }) => {
        this.translate.use(language);
      },
    });
  }

  goToGroup = (groupId: string) =>{
    this.store.dispatch(selectGroup({groupId}));
    this.router.navigate(['/group/dashboard/start']);
  }

}
