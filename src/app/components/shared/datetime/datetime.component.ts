import { Component, Input} from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent{
  datetime: any;
  constructor(private popoverCtrl: PopoverController){
    
  }
  loadDate(event:any){
    this.datetime = event.detail.value;
    this.popoverCtrl.dismiss( this.datetime );
  }
}
