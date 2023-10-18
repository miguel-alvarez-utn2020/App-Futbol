import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { RegisterMathComponent } from 'src/app/pages/components/register-math/register-math.component';
import { HistoryMatch } from 'src/app/pages/domain/models/HistoryMatch';
import { ModalService } from 'src/app/services/shared/modal.service';


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
export class RecordPage {
  private modalService = inject(ModalService);
  titleSlides = ['Historial de partidos', 'Fecha de partidos'];
  indesSwiper = 0;
  historyMatches: HistoryMatch[] = []

  constructor() {

  }

 async slideChanged(event){
    const swiper = await event.target.getSwiper();
    this.indesSwiper = swiper.realIndex;
    console.log(swiper.realIndex);
  }


  showModalRegisterMatch(){
      this.modalService.showModal(RegisterMathComponent, {});
  }
}
