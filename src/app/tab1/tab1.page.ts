import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { min } from 'rxjs';
import { PopoverService } from '../services/shared/popover.service';
import { ButtonComponent } from '../components/shared/button/button.component';
import { ModalService } from '../services/shared/modal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  loginForm!: FormGroup;
  nombre!: string;
  lista = [
    'miguel',
    'josue',
    'julio',
    'Patricia',
    'Ale'
  ]
  url!: string;

  tituloPadre = 'Tab 1'
  constructor(private modalController: ModalController, private fb: FormBuilder, private popoverService: PopoverService, private modalService: ModalService) {}

  ngOnInit(): void {
      this.url = 'assets/img/foto.svg'
      this.loginForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(6)]]
      })
      console.log(this.loginForm.get('name'))
  }


  onClick(event: any){
    const props = {
      label: 'login'
    }
    this.modalService.showModal(ButtonComponent, props, false, 'custom-modal')
  }

  login(){
     console.log('login', this.loginForm.valid);
  }

}
