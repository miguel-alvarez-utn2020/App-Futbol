import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { RegisterMathComponent } from 'src/app/pages/components/register-math/register-math.component';
import { HistoryMatch } from 'src/app/pages/domain/models/HistoryMatch';
import { ModalService } from 'src/app/services/shared/modal.service';
import { selectGroupHistoryMatch } from '@app/state/selectors'

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
  private modalService = inject(ModalService);
  private store = inject(Store<AppState>);
  titleSlides = ['Historial de partidos', 'Fecha de partidos'];
  indesSwiper = signal(0);
  historyMatches = signal<HistoryMatch[]>([])

  constructor() {

  }

  ngOnInit(): void {
    this.store.select(selectGroupHistoryMatch).subscribe({
      next: (historyMatch: HistoryMatch[])=> this.historyMatches.set(historyMatch)
    })
  }

 async slideChanged(event){
    const swiper = await event.target.getSwiper();
    this.indesSwiper.set(swiper.realIndex);
  }


  showModalRegisterMatch(){
      this.modalService.showModal(RegisterMathComponent, {});
  }
}
