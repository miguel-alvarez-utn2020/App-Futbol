import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { debounceTime, min } from 'rxjs';
import { BUTTONS_LOGIN, BUTTONS_REGISTER, ERROR_REGISTER_BACKEND, INPUT_REGISTER } from './constants/constants';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/enums/language';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/shared/toast.service';
import { AuthService, TOKEN } from '../../services/auth.service';
import { LOGIN_EMAIL_OR_PASSWORD_INCORRECT, REGISTER_EMAIL_ALREADY_EXIST } from '../../data/api-error-codes';
import { StorageService } from '../../services/storage.service';
import { FormErrorsService } from '../../services/form-errors.service';
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {
  private fb = inject(FormBuilder);
  private translate = inject(TranslateService);
  private router = inject(Router);
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  private toastService = inject(ToastService);
  private formErrorsService = inject(FormErrorsService);
  _inputRegister: any[] = INPUT_REGISTER;
  _buttonRegister: any = BUTTONS_REGISTER;
  _buttonLogin: any = BUTTONS_LOGIN;
  _errorRegisterBackend = ERROR_REGISTER_BACKEND;
  languages: string[] = [Language.EN.toUpperCase(), Language.ES.toUpperCase()]
  defaultLanguages: Language = Language.ES;
  registerForm!: FormGroup;
  onlyNumberRegex = /^[0-9]+$/
  debaunceTime: boolean = false;

  ngOnInit(): void {
    this.initFormRegister();
    this.translate.use(this.defaultLanguages);
  }
  //este tipo de funcion es para pasar funciones por input a componentes
  register = () => {
    const createUserData = {...this.registerForm.value, age: parseInt(this.registerForm.value.age)};
    this.authService.register(createUserData).subscribe((res: any) => {
      this.storageService.setItem(TOKEN, res.token);
      this.router.navigate(['/home']);
    }, ({ error }) => {
      const { code } = JSON.parse(error.message);
      if(code === REGISTER_EMAIL_ALREADY_EXIST){
        this.translate.get(this._errorRegisterBackend).subscribe((translateText) => {
          this.toastService.showToast(translateText, 'danger');
        });
      }
    });
  }

  goToLogin = () => {
    this.router.navigate(['/']);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
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

    onInputChanged(input){
      input.endDebaunceTime = false;
      this.formErrorsService.checkFormErrors(this.registerForm).subscribe((endDebaunceTime: boolean)=>{
        input.endDebaunceTime = endDebaunceTime;
      })
    }

  languageSelected(event: string) {
    this.switchLanguage(event.toLowerCase());
  }

}
