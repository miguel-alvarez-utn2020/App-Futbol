import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { RegisterMathComponent } from 'src/app/pages/components/register-math/register-math.component';
import { HistoryMatch } from 'src/app/pages/domain/models/HistoryMatch';
import { ModalService } from 'src/app/services/shared/modal.service';
import { languageSelected, selectActiveGroup, selectGroupHistoryMatch } from '@app/state/selectors'
import { TranslateService } from '@ngx-translate/core';
import { Group } from 'src/app/pages/domain/models/Group';

@Component({
  selector: 'app-record',
  templateUrl: 'record.page.html',
  styleUrls: ['record.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],
})
export class RecordPage implements OnInit{
  private translate = inject(TranslateService);
  private store = inject(Store<AppState>);
  private modalService = inject(ModalService);
  private activeGroup = signal<Group>({} as Group);
  titleSlides = ['historyMatch.recordsLabel', 'historyMatch.matchDate'];
  indesSwiper = signal(0);
  historyMatches = signal<HistoryMatch[]>([])

  constructor() {

  }

  ngOnInit(): void {
    this.loadLenguage();
    this.loadHistoryMatch();
    this.getActiveGroup();
  }

  loadHistoryMatch(){
    this.store.select(selectGroupHistoryMatch).subscribe({
      next: (historyMatch: HistoryMatch[])=> this.historyMatches.set(historyMatch)
    })
  }

  getActiveGroup(){
    this.store.select(selectActiveGroup).subscribe({
      next: (activeGroup) => this.activeGroup.set(activeGroup)
    })
  }

 async slideChanged(event){
    const swiper = await event.target.getSwiper();
    this.indesSwiper.set(swiper.realIndex);
  }

  loadLenguage() {
    this.store.select(languageSelected).subscribe({
      next: ({ language }) => {
        this.translate.use(language);
      },
    });
  }


  showModalRegisterMatch(){
      const groupId = this.activeGroup().id;
      this.modalService.showModal(RegisterMathComponent, {groupId});
  }
}
