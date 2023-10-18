import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Group, GroupTypes } from '../../domain/models/Group';
import { CameraService } from 'src/app/services/shared/camera.service';
import { ActionsheetService } from 'src/app/services/shared/actionSheet.service';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss'],
})
export class RegisterGroupComponent implements OnInit {
  private modalCtrl = inject(ModalController);
  private fb = inject(FormBuilder);
  private actionSheetService = inject(ActionsheetService);
  private groupService = inject(GroupService);
  formRegisterGroup: FormGroup;
  imgAvartar = 'assets/avatar.png';
  constructor(
    
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
    const createGroup = {...this.formRegisterGroup.value}
    this.groupService.create(createGroup).subscribe((res: Group)=>{
      console.log(res);  
      this.modalCtrl.dismiss();
    })
  }

  initFormRegisterGroup() {
    this.formRegisterGroup = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      photo: [''],
    });
  }

  async takePhoto() {
  this.imgAvartar = await this.actionSheetService.showActionSheet();
   this.formRegisterGroup.patchValue({
    imgGroup: this.imgAvartar
   })
  }

  uploadImage(event){
    this.formRegisterGroup.patchValue({
      photo: event
     })
  }
}
