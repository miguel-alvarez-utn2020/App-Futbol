import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GroupTypes } from '../../domain/models/Group';
import { ActionsheetService } from 'src/app/services/shared/actionSheet.service';
import { GroupService } from '../../services/group.service';
import { Store } from '@ngrx/store';
import { createGroup } from '@app/state/actions'

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss'],
})
export class RegisterGroupComponent implements OnInit {
  private modalCtrl = inject(ModalController);
  private actionSheetService = inject(ActionsheetService);
  private fb = inject(FormBuilder);
  private store = inject(Store)
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
    const createGroupData = {...this.formRegisterGroup.value}
    this.store.dispatch(createGroup({group: createGroupData}))
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
