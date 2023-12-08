import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { TranslateService } from '@ngx-translate/core';
import { languageSelected, selectActiveGroup } from '@app/state/selectors';
import { ChatService } from 'src/app/services/shared/chat.service';
import { userSync } from '@app/state/actions';

@Component({
  selector: 'app-tab-player',
  templateUrl: 'tab-player.page.html',
  styleUrls: ['tab-player.page.scss']
})
export class TabPlayerPage implements OnInit{
  private translate = inject(TranslateService);
  private store = inject(Store<AppState>);
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.store.select( selectActiveGroup )
    .subscribe( group => {
      this.chatService.joinRoom(group.id);
    });
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
