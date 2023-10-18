import { Component, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../../services/group.service';
import { Group } from '../../domain/models/Group';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit{
  private popoverCtrl =  inject(PopoverController);
  private groupService =  inject(GroupService);
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
      console.log(this.joinGroupForm.value);
        this.groupService.joinGroup(this.joinGroupForm.value).subscribe((res: Group)=>{
          console.log(res);
          
      }, error => console.log(error));
    }

}
