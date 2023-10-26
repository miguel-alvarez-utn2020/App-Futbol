import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  INPUT_REGISTER_MATCH,
  CHECKS_REGISTER_MATCH,
  OPTION_SELECT_MATCH,
} from './constants/constants';
import { PopoverService } from 'src/app/services/shared/popover.service';
import { DatetimeComponent } from 'src/app/components/shared/datetime/datetime.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, props } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { createMatch } from '@app/state/actions';
import { CreateMatch, Match } from '../../domain/models/Match';

@Component({
  selector: 'app-register-math',
  templateUrl: './register-math.component.html',
  styleUrls: ['./register-math.component.scss'],
})
export class RegisterMathComponent {
  private store = inject(Store<AppState>)
  @Input() props: any;
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

  // date: Date;
  // location: string;
  // quantityPlayers: number;
  // automaticAssemble: boolean;
  // withSustitutes: boolean;
  // rematch: boolean;
  // isContinuous: boolean;

  buildDate(date: Date){
    const fullDate = new Date(date);
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();

    const hour = fullDate.getHours();
    const min = fullDate.getMinutes();
    const formattedMin = min < 10 ? `0${min}` : min
    this.matchDate = `${day}/${month}/${year}`;
    this.matchTime = `${hour}:${formattedMin}`
  }

  saveMatch = () =>{
    const match: CreateMatch = this.registerMatchForm.value;
    const groupId = this.props.groupId;
    this.store.dispatch(createMatch({groupId, match}));
  }
}
