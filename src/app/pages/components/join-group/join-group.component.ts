import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent {
    constructor(private popoverCtrl: PopoverController){

    }

    close(){
      this.popoverCtrl.dismiss();
    }

}
