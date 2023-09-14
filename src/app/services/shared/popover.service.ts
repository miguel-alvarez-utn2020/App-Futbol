import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverOptions } from '../../interfaces/popover'

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  constructor(private popoverCtrl: PopoverController) {}

  async showPopover(
    component: any,
    event: any,
    props: any = {},
    options: PopoverOptions = {
      cssClass: '',
      side: 'bottom',
      size: 'cover',
      alignment: 'center',
      backdropDismiss: false
    }
  ) {
    const {cssClass, side, size, alignment, backdropDismiss} = options;

    const popover = await this.popoverCtrl.create({
      component: component,
      event,
      translucent: true,
      componentProps: {props},
      backdropDismiss: backdropDismiss? backdropDismiss: false,
      side: side? side : 'bottom',
      size: size? size : 'cover',
      alignment: alignment? alignment: 'center',
      cssClass: cssClass? cssClass: ''
    });

    await popover.present();

    const  data  = await popover.onDidDismiss();

    return data ? data : null;
  }
}
