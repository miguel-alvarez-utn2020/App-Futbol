import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/shared/modal.service';
import { RegisterGroupComponent } from '../../components/register-group/register-group.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  showRegisterGroupModal(){
    this.modalService.showModal(RegisterGroupComponent, {})
  }
}
