import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
  INPUT_LOGIN,
  BUTTONS_LOGIN,
  ERROR_LOGIN_BACKEND,
  BUTTONS_REGISTER,
} from './constant/constant';
import { Language } from 'src/app/enums/language';
import { ToastService } from 'src/app/services/shared/toast.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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
  languages: string[] = [Language.EN.toUpperCase(), Language.ES.toUpperCase()];
  defaultLanguages: Language = Language.EN;
  languageSelect!: string;
  onlyNumberRegex = /^[0-9]+$/;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private toastService: ToastService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.switchLanguage(this.defaultLanguages);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  login = () => {
    // this.router.navigate(['/home']);
    const { email, password } = this.loginForm.value;
    console.log(email, password);
    
    this.authService.login(email, password).subscribe((res) => {
      console.log(res);
    }, error => {
      console.log(error);

    });
    // this.translate.get(this._errorLogiBackend).subscribe((translateText) => {
    //   this.toastService.showToast(translateText, 'danger');
    // });
  };

  goToRegister = () => {
    this.router.navigate(['/register']);
  };

  languageSelected(event: string) {
    this.languageSelect = event;
    this.switchLanguage(event.toLowerCase());
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
}
