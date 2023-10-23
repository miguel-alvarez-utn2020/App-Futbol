import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { TranslateService } from '@ngx-translate/core';
import { languageSelected } from '@app/state/selectors';

@Component({
  selector: 'app-tab-player',
  templateUrl: 'tab-player.page.html',
  styleUrls: ['tab-player.page.scss']
})
export class TabPlayerPage implements OnInit{
  private translate = inject(TranslateService);
  private store = inject(Store<AppState>);
  constructor() {}

  ngOnInit(): void {
    this.loadLenguage();
  }
  

  loadLenguage() {
    this.store.select(languageSelected).subscribe({
      next: ({ language }) => {
        this.translate.use(language);
      },
    });
  }
}
