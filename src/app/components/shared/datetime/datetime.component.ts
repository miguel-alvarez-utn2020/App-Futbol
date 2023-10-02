import { DatePipe } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit{
  datetime: any;
  minDate: string;
  constructor(private popoverCtrl: PopoverController, private datePipe: DatePipe){
    
  }
  ngOnInit(): void {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  loadDate(event:any){
    this.datetime = event.detail.value;
    this.popoverCtrl.dismiss( this.datetime );
  }
}
