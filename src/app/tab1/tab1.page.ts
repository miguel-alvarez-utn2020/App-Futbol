import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { min } from 'rxjs';
import { PopoverService } from '../services/shared/popover.service';
import { ButtonComponent } from '../components/shared/button/button.component';
import { ModalService } from '../services/shared/modal.service';
import { AlertService } from '../services/shared/alert.service';
import { ToastService } from '../services/shared/toast.service';
import { DatetimeComponent } from '../components/shared/datetime/datetime.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  loginForm!: FormGroup;
  nombre!: string;
  lista = ['miguel', 'josue', 'julio', 'Patricia', 'Ale'];
  url!: string;

  tituloPadre = 'Tab 1';
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private popoverService: PopoverService,
    private modalService: ModalService,
    private alertService: AlertService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.url = 'assets/img/foto.svg';
    this.loginForm = this.fb.group({
      check: [false, [Validators.requiredTrue]]
    });
    console.log(this.loginForm.get('name'));
  }
  //este tipo de funcion es para pasar funciones por input a componentes
  login = () => {
    console.log('login', this.loginForm);
  }

 async onClick(event:any) {
    const props = {
      label: 'login',
    };

    const data = await this.popoverService.showPopover(DatetimeComponent, event, props)
    console.log('data popover', data);
    
  }

}
