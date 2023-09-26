import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { CameraService } from './camera.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsheetService {

  constructor(private actionSheetCtrl: ActionSheetController, private cameraService: CameraService) { }

  private resultado: string | null = null; // Variable para almacenar el resultado

  async showActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Elige una opción',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: async () => {
            this.resultado = await this.takePhoto();
            actionSheet.dismiss();
          },
        },
        {
          text: 'Galería',
          icon: 'image',
          handler: async () => {
            this.resultado = await this.getFileFromGallery();
            actionSheet.dismiss();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            actionSheet.dismiss();
          },
        },
      ],
    });

    await actionSheet.present();
    await actionSheet.onDidDismiss();
    return this.resultado? this.resultado: null;
  }

  async takePhoto() {
    return await this.cameraService.takePhoto();
  }

  async getFileFromGallery() {
    return await this.cameraService.takePhotoGallery();
  }

  


}
