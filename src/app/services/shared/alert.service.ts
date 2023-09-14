import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService{

  constructor(private alertCtrl: AlertController) { }

  async showCommonAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['Aceptar'],
      cssClass:'mi-clase-personalizada'
    });
    await alert.present();
  }
}
