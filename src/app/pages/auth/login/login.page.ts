import { Component, DoCheck, OnInit, effect, inject } from '@angular/core';
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
import { AuthService, TOKEN, USER } from '../../services/auth.service';
import { LOGIN_EMAIL_OR_PASSWORD_INCORRECT } from '../../data/api-error-codes';
import { StorageService } from '../../services/storage.service';
import { FormErrorsService } from '../../services/form-errors.service';
import { User } from '../../domain/models/User';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  private formErrorsService = inject(FormErrorsService);
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
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.switchLanguage(this.defaultLanguages);
  }

  switchLanguage(lang: string) {
    const langu = this.translate.getBrowserLang();
  }

  login = () => {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (res: { user: User; token: string }) => {
        this.storageService.setItem(TOKEN, res.token);
        this.router.navigate(['/home']);
      },
      error: ({ error }) => {
        const { code } = JSON.parse(error.message);
        if (code === LOGIN_EMAIL_OR_PASSWORD_INCORRECT) {
          this.translate.get(this._errorLogiBackend).subscribe({
            next: (translateText) => {
              this.toastService.showToast(translateText, 'danger');
            },
          });
        }
      },
    });
  };

  goToRegister = () => {
    this.router.navigate(['/register']);
  };

  languageSelected(event: string) {
    this.languageSelect = event;
    this.switchLanguage(event.toLowerCase());
  }

  onInputChanged(input) {
    input.endDebaunceTime = false;
    this.formErrorsService.checkFormErrors(this.loginForm).subscribe({
      next: (endDebaunceTime: boolean) => {
        input.endDebaunceTime = endDebaunceTime;
      },
    });
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(1), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
}
