import { Component, OnInit, inject, signal } from '@angular/core';
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
import { StorageService } from '../../services/storage.service';
import { FormErrorsService } from '../../services/form-errors.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/state';
import { setLanguage, login } from '@app/state/actions';
import { languageSelected } from '@app/state/selectors';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  private fb = inject(FormBuilder);
  private translate = inject(TranslateService);
  private router = inject(Router);
  private formErrorsService = inject(FormErrorsService);
  private store = inject(Store<AppState>);

  public inputLogin = signal<any[]>(INPUT_LOGIN);
  public buttonLogin  = signal(BUTTONS_LOGIN);
  public buttonRegister = signal(BUTTONS_REGISTER);
  public errorLogiBackend = signal<string>(ERROR_LOGIN_BACKEND);
  public languages = signal<string[]>([Language.EN, Language.ES]);
  public languageSelect = signal<string>('');
  public diviceLanguage = signal<string>(Language.ES);
  public loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initLoginForm();
    this.loadLenguage();
  }

  loadLenguage() {
    this.store.select(languageSelected).subscribe({
      next: ({ language }) => {
        this.diviceLanguage.set(language);
        this.translate.use(language)
      },
    });
  }

  login = () => {
    const credentials = this.loginForm.value;
    this.store.dispatch(login({credentials}))
  };

  goToRegister = () => {
    this.router.navigate(['auth/register']);
  };

  languageSelected(event: string) {
    this.store.dispatch(setLanguage({language: event}))
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
