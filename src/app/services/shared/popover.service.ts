import { Injectable } from '@angular/core';
import { PopoverController, PopoverOptions } from '@ionic/angular';
import {
  PopoverSize,
  PositionAlign,
  PositionSide,
} from 'src/app/interfaces/popover';

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  constructor(private popoverCtrl: PopoverController) {}

  async showPopover(
    component: any,
    event: any,
    props: any,
    cssClass: string | string[] | undefined = '',
    side: PositionSide = 'bottom',
    size: PopoverSize = 'cover',
    alignment: PositionAlign = 'center',
    backdropDismiss: boolean = true,
  ) {
    const popover = await this.popoverCtrl.create({
      component: component,
      event,
      translucent: true,
      componentProps: {props},
      backdropDismiss,
      side,
      size,
      alignment,
      cssClass
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();

    return data ? data : null;
  }
}
