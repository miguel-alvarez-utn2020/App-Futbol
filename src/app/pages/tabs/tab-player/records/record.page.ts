import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component} from '@angular/core';


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
  constructor(
   
  ) {}

 async slideChanged(event){
    const swiper = await event.target.getSwiper();
    this.indesSwiper = swiper.realIndex;
    console.log(swiper.realIndex);
  }


}
