import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PredefinedColors } from '@ionic/core';
import { PositionToast } from 'src/app/interfaces/toast';

export enum ToastTypeColors {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    LIGHT = 'light',
    MEDIUM = 'medium',
    DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async showToast(
    message: string = '',
    color: PredefinedColors = 'success',
    position: PositionToast = 'bottom',
    duration: number = 2000
  ) {
    const toast = await this.toastCtrl.create({
      message,
      duration,
      position,
      color,
      cssClass: 'mi-toast-message'
    });

    await toast.present();
  }
}
