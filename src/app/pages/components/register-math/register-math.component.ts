import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  INPUT_REGISTER_MATCH,
  CHECKS_REGISTER_MATCH,
  OPTION_SELECT_MATCH,
} from './constants/constants';
import { PopoverService } from 'src/app/services/shared/popover.service';
import { DatetimeComponent } from 'src/app/components/shared/datetime/datetime.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-math',
  templateUrl: './register-math.component.html',
  styleUrls: ['./register-math.component.scss'],
})
export class RegisterMathComponent {
  inputRegisterForm = INPUT_REGISTER_MATCH;
  checkRegisterForm = CHECKS_REGISTER_MATCH;
  selectRegisterForm = OPTION_SELECT_MATCH;
  registerMatchForm: FormGroup;
  matchDate: string = '';
  matchTime: string = '';
  constructor(
    private modalCtrl: ModalController,
    private popoverService: PopoverService,
    private fb: FormBuilder,
  ) {
    this.initRegisterMatchForm();
  }

  closeModal = () => {
    this.modalCtrl.dismiss();
  };

  async showPopoverDatetime(event) {
    event.stopPropagation();
    const { data } = await this.popoverService.showPopover(
      DatetimeComponent,
      event
    );
    if(data){
      this.buildDate(data)
      this.registerMatchForm.patchValue({
        date: data
      })
    }
  }

  initRegisterMatchForm() {
    this.registerMatchForm = this.fb.group({
      date: ['', [Validators.required]],
      location: ['', [Validators.required]],
      quantityPlayers: [5, [Validators.required]],
      automaticAssemble: [true],
      withSustitutes: [false],
      rematch: [false],
      isContinuous: [true],
    })
  }

  buildDate(date: Date){
    const fullDate = new Date(date);
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();

    const hour = fullDate.getHours();
    const min = fullDate.getMinutes();
    const formattedMin = min < 10 ? `0${min}` : min
    console.log(min);
    
    this.matchDate = `${day}/${month}/${year}`;
    this.matchTime = `${hour}:${formattedMin}`
  }

  saveMatch = () =>{
    this.modalCtrl.dismiss();
  }
}
