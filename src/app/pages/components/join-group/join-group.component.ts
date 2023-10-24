import { Component, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../../services/group.service';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { joinGroup } from '@app/state/actions';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit{
  private popoverCtrl =  inject(PopoverController);
  private groupService =  inject(GroupService);
  private store = inject(Store<AppState>)
  private fb =  inject(FormBuilder);
  joinGroupForm: FormGroup;

  ngOnInit(): void {
    this.joinGroupForm = this.fb.group({
      groupCode: ['', [Validators.required]]
    }) 
  }

    close(){
      this.popoverCtrl.dismiss();
    }

    joinGroup(){
      const { groupCode } = this.joinGroupForm.value;
      this.store.dispatch(joinGroup({groupCode}))
    }

}
