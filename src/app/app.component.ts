import { Component, inject } from '@angular/core';
import { selectUser } from './states/selectors/user.selectors';
import { Store } from '@ngrx/store'
import { logout } from '@app/state/actions'
import { StorageService } from './pages/services/storage.service';
import { AppState } from '@capacitor/app';
import { LOGGED_IN } from './pages/services/auth.service';
import {loadLanguage, userSync} from '@app/state/actions'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private store = inject(Store<AppState>);
  private storageService = inject(StorageService);
  constructor() {
    this.appSync();
    this.loadLanguage();
  }

  loadLanguage() {
    this.store.dispatch(loadLanguage());
  }

  appSync(){
    this.store.select(selectUser).subscribe({
      next: ({user}) => {
        const loggedIn = this.storageService.getItem(LOGGED_IN, true);
        if(loggedIn && !user){
          this.store.dispatch(userSync());
        }
      }
    })
  }

  logout(){
    this.store.dispatch(logout());
  }
}
