import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { min } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  nombre!: string;
  lista = ['miguel', 'josue', 'julio', 'Patricia', 'Ale'];
  url!: string;

  tituloPadre = 'Tab 1';
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.url = 'assets/img/foto.svg';
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]]
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

  }

}
