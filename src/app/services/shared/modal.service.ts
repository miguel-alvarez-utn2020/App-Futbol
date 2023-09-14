import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalCtrl: ModalController) {}

  async showModal(
    component: any,
    props: any,
    backdropDismiss: boolean = true,
    cssClass: string | string[] | undefined = ''
  ) {
    const modal = await this.modalCtrl.create({
      component,
      componentProps: {props},
      backdropDismiss,
      cssClass,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    return data ? data : null;
  }
}
