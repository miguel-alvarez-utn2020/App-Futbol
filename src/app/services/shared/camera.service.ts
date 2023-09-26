import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource, Camera } from '@capacitor/camera';


@Injectable({
  providedIn: 'root',
})
export class CameraService {
  private readonly TAG = 'CameraService - ';

  constructor() {}

  /**
   * @returns base64 image PNG
   */
  async takePhoto(): Promise<any> {
    try {
      const imageData = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        width: 512,
        height: 512,
        correctOrientation: true,
      });
      if (imageData && imageData.dataUrl) {
        const base64Image = imageData.dataUrl;
        return base64Image;
      }
      return null;
    } catch (err) {
      // Handle error
      return err;
    }
  }

  async takePhotoGallery(): Promise<any> {
    try {
      const imageData = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        width: 512,
        height: 512,
        correctOrientation: true,
      });
      if (imageData && imageData.dataUrl) {
        const base64Image = imageData.dataUrl;
        return base64Image;
      }
      return null;
    } catch (err) {
      // Handle error
      return err;
    }
  }
 
}
