import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

export enum Answers {
    CONFIRM = 'confirm',
    CANCEL = 'cancel',
}

@Injectable({
  providedIn: 'root'
})
export class AlertService{
  private answerSimpleAlertQuestion : boolean = false;
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

  async simpleAlertQuestion(textAlert: string, textConfirm: string, textCancel: string){
    const alert = await this.alertCtrl.create({
      header: textAlert,
      cssClass:'custom-alert',
      buttons: [
        {
          text: textCancel,
          role: Answers.CANCEL,
          handler: () => {
            this.answerSimpleAlertQuestion = false;
          },
        },
        {
          text: textConfirm,
          role: Answers.CONFIRM,
          handler: () => {
            this.answerSimpleAlertQuestion = true;
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.answerSimpleAlertQuestion = role === Answers.CONFIRM? true : false;
    return this.answerSimpleAlertQuestion;
  }
}
