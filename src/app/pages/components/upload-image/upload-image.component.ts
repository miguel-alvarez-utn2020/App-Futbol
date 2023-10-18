import { Component, Output, inject, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ActionsheetService } from 'src/app/services/shared/actionSheet.service';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  private actionSheetService = inject(ActionsheetService)
  @Output() emitImageSelected: EventEmitter<string> = new EventEmitter<string>();
  imgAvartar = 'assets/avatar.png';


  async takePhoto() {
    this.imgAvartar = await this.actionSheetService.showActionSheet();
      this.emitImageSelected.emit(this.imgAvartar)
    }
}
