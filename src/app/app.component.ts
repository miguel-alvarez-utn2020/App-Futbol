import { Component, inject } from '@angular/core';
import { selectUser } from './states/selectors/user.selectors';
import { Store } from '@ngrx/store'
import { StorageService } from './pages/services/storage.service';
import { AppState } from '@capacitor/app';
import { ACTIVE_GROUP, LOGGED_IN } from './pages/services/auth.service';
import {loadLanguage, userSync, selectGroup, logout} from '@app/state/actions'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private store = inject(Store<AppState>);
  private storageService = inject(StorageService);
  private router = inject(Router);
  constructor() {
    this.appSync();
    this.loadLanguage();
  }

  loadLanguage() {
    this.store.dispatch(loadLanguage());
  }

  appSync(){
    const groupId = this.storageService.getItem(ACTIVE_GROUP, true)
    this.store.select(selectUser).subscribe({
      next: ({user}) => {
        const loggedIn = this.storageService.getItem(LOGGED_IN, true);
        if(loggedIn && !user){
          this.store.dispatch(userSync());
        }
        if(groupId){
          this.store.dispatch(selectGroup({groupId}));
        }
      }
    })
  }

  logout(){
    this.store.dispatch(logout());
  }

  goToGroups(){
    this.router.navigate(['/home']);
  }
}
