import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component} from '@angular/core';
import { RegisterMathComponent } from 'src/app/pages/components/register-math/register-math.component';
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
  titleSlides = ['Calendario', 'Historial de partidos'];
  indesSwiper = 0;
  constructor(private modalService: ModalService) {}

 async slideChanged(event){
    const swiper = await event.target.getSwiper();
    this.indesSwiper = swiper.realIndex;
    console.log(swiper.realIndex);
  }


  showModalRegisterMatch(){
      this.modalService.showModal(RegisterMathComponent, {});
  }
}
