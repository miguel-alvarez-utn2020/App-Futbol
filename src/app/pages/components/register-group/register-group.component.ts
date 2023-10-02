import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GroupTypes } from '../../interfaces/Group';
import { CameraService } from 'src/app/services/shared/camera.service';
import { ActionsheetService } from 'src/app/services/shared/actionSheet.service';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss'],
})
export class RegisterGroupComponent implements OnInit {
  formRegisterGroup: FormGroup;
  imgAvartar = 'assets/avatar.png';
  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private actionSheetService: ActionsheetService
  ) {}
  groupTypeSelect = [
    {
      label: GroupTypes.ORGANIZER,
      value: GroupTypes.ORGANIZER,
    },
    {
      label: GroupTypes.PROVIDER,
      value: GroupTypes.PROVIDER,
    },
    {
      label: GroupTypes.SOCCER_COACH,
      value: GroupTypes.SOCCER_COACH,
    },
    {
      label: GroupTypes.TRAINER,
      value: GroupTypes.TRAINER,
    },
  ];
  ngOnInit(): void {
    this.initFormRegisterGroup();
  }
  CloseModal = () =>  {
    this.modalCtrl.dismiss();
  }

  saveGroup = () => {
    console.log(this.formRegisterGroup.value);
    this.modalCtrl.dismiss();
  }

  initFormRegisterGroup() {
    this.formRegisterGroup = this.fb.group({
      groupName: ['', [Validators.required]],
      groupType: ['', [Validators.required]],
      imgGroup: [''],
    });
  }

  async takePhoto() {
  this.imgAvartar = await this.actionSheetService.showActionSheet();
   this.formRegisterGroup.patchValue({
    imgGroup: this.imgAvartar
   })
  }
}
