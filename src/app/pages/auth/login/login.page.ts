import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { INPUT_LOGIN, BUTTONS_LOGIN, ERROR_LOGIN_BACKEND, BUTTONS_REGISTER } from './constant/constant';
import { Language } from 'src/app/enums/language';
import { ToastService } from 'src/app/services/shared/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  _inputLogin: any[] = INPUT_LOGIN;
  _buttonLogin: any = BUTTONS_LOGIN;
  _buttonRegister: any = BUTTONS_REGISTER;
  _errorLogiBackend = ERROR_LOGIN_BACKEND;
  loginForm!: FormGroup;
  languages: string[] = [Language.EN.toUpperCase(), Language.ES.toUpperCase()]
  defaultLanguages: Language = Language.EN;
  languageSelect!: string;
  onlyNumberRegex = /^[0-9]+$/

  constructor(private fb: FormBuilder, private translate: TranslateService, private toastService: ToastService, private router: Router) {}

  ngOnInit(): void {
    this.switchLanguage(this.defaultLanguages);
    this.initLoginForm();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  login = () => {
    console.log('login', this.loginForm);
    this.router.navigate(['/home']);
    this.translate.get(this._errorLogiBackend).subscribe( translateText => {
      this.toastService.showToast(translateText, 'danger')
    })
  };

  goToRegister = () => {
    this.router.navigate(['/register']);
  }

  languageSelected(event: string) {
    this.languageSelect = event;
    this.switchLanguage(event.toLowerCase());
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.onlyNumberRegex)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

}
