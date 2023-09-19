import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { min } from 'rxjs';
import { BUTTONS_LOGIN, BUTTONS_REGISTER, INPUT_REGISTER } from './constants/constants';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/enums/language';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {
  _inputRegister: any[] = INPUT_REGISTER;
  _buttonRegister: any = BUTTONS_REGISTER;
  _buttonLogin: any = BUTTONS_LOGIN;
  languages: string[] = [Language.EN.toUpperCase(), Language.ES.toUpperCase()]
  defaultLanguages: Language = Language.ES;
  registerForm!: FormGroup;
  onlyNumberRegex = /^[0-9]+$/


  tituloPadre = 'Tab 1';
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFormRegister();
    this.translate.use(this.defaultLanguages);

  }
  //este tipo de funcion es para pasar funciones por input a componentes
  register = () => {
    this.router.navigate(['/player-dashboard']);
  }

  goToLogin = () => {
    this.router.navigate(['/']);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  initFormRegister(){
    this.registerForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.onlyNumberRegex)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      age: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      photo: ['']
    });
  }

  languageSelected(event: string) {
    this.switchLanguage(event.toLowerCase());
  }

}
