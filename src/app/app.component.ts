import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '@capacitor/app';
import { loadLanguage, userSync } from './states';
import { logout } from './states'
import { selectUser } from './states/selectors/user.selectors';
import { StorageService } from './pages/services/storage.service';
import { LOGGED_IN } from './pages/services/auth.service';
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
            console.log('sync');
          
        }
      }
    })
  }

  logout(){
    this.store.dispatch(logout());
  }
}
