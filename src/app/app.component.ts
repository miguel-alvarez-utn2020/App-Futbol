import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '@capacitor/app';
import { loadLanguage } from './states';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private store = inject(Store<AppState>);

  constructor() {
    this.loadLanguage();
  }
  loadLanguage() {
    this.store.dispatch(loadLanguage());
  }
}
