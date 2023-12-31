import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BUTTONS_LOGIN, BUTTONS_REGISTER, ERROR_REGISTER_BACKEND, INPUT_REGISTER } from './constants/constants';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/enums/language';
import { Router } from '@angular/router';
import {  UtilsService } from '../../services/utils.service';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/state';
// import { languageSelected, setLanguage, register } from '../../../states';
import { setLanguage, register } from '@app/state/actions';
import { languageSelected } from '@app/state/selectors';
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {
  private fb = inject(FormBuilder);
  private translate = inject(TranslateService);
  private router = inject(Router);
  private formErrorsService = inject(UtilsService);
  private store = inject(Store<AppState>);

  public inputRegister = signal<any[]>(INPUT_REGISTER);
  public buttonRegister = signal(BUTTONS_REGISTER);
  public buttonLogin = signal(BUTTONS_LOGIN);
  public languages = signal<string[]>([Language.EN, Language.ES]);
  public errorRegisterBackend = ERROR_REGISTER_BACKEND;
  public registerForm!: FormGroup;
  public diviceLanguage = signal<string>('es') ;
  ngOnInit(): void {
    this.initFormRegister();
    this.loadLenguage();
  }

  loadLenguage() {
    this.store.select(languageSelected).subscribe({
      next: ({ language }) => {
        this.diviceLanguage.set(language);
        this.translate.use(language);
      },
    });
  }

  register = () => {
    const userCreate = {...this.registerForm.value, age: parseInt(this.registerForm.value.age)};
    this.store.dispatch(register({userCreate}))
  }

  goToLogin = () => {
    this.router.navigate(['auth/login']);
  }


  initFormRegister(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      photo: ['']
    });
  }

  onInputChanged(input) {
    input.endDebaunceTime = false;
    this.formErrorsService.checkFormErrors(this.registerForm).subscribe({
      next: (endDebaunceTime: boolean) => {
        input.endDebaunceTime = endDebaunceTime;
      },
    });
  }

  languageSelected(event: string) {
    this.store.dispatch(setLanguage({language: event}))
  }

  uploadImage(event){
    this.registerForm.patchValue({
      photo: event
     })
  }

}
