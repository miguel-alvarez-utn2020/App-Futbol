import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import {
  AuthService,
  LOGGED_IN,
  TOKEN,
} from 'src/app/pages/services/auth.service';
import { StorageService } from '../../pages/services/storage.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  LOGIN_EMAIL_OR_PASSWORD_INCORRECT,
  REGISTER_EMAIL_ALREADY_EXIST,
} from 'src/app/pages/data/api-error-codes';
import { ERROR_REGISTER_BACKEND } from '../../pages/auth/register/constants/constants';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/services/shared/toast.service';
import { ERROR_LOGIN_BACKEND } from 'src/app/pages/auth/login/constant/constant';
import {
  login,
  loginSuccess,
  loginFailure,
  loadUser,
  logout,
  logoutSuccess,
  removeUser,
  register,
  registerSuccess,
  registerFailure,
} from '@app/state/actions';
@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  private store = inject(Store);
  private router = inject(Router);
  private translate = inject(TranslateService);
  private toastService = inject(ToastService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((res) => {
            console.log(res);
            
            this.storageService.setItem(TOKEN, res.token);
            this.storageService.setItem(LOGGED_IN, true);
            this.store.dispatch(loadUser({ user: res.user }));
            this.router.navigate(['/home']);
            return loginSuccess();
          }),
          catchError(({ error }) => {
            const { code } = JSON.parse(error.message);
            if (code === LOGIN_EMAIL_OR_PASSWORD_INCORRECT) {
              this.translate.get(ERROR_LOGIN_BACKEND).subscribe({
                next: (translateText) => {
                  this.toastService.showToast(translateText, 'danger');
                },
              });
            }
            return of(loginFailure({ error }));
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap((action) => {
        const { email, password } = action.userCreate;
        const credentials = {
          email,
          password,
        };
        return this.authService.register(action.userCreate).pipe(
          map(() => {
            this.store.dispatch(login({ credentials }));
            return registerSuccess();
          }),
          catchError(({ error }) => {
            const { code } = JSON.parse(error.message);
            if (code === REGISTER_EMAIL_ALREADY_EXIST) {
              this.translate.get(ERROR_REGISTER_BACKEND).subscribe({
                next: (translateText) => {
                  this.toastService.showToast(translateText, 'danger');
                },
              });
            }
            return of(registerFailure({ error }));
          })
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() => {
        this.storageService.removeAllItems();
        this.store.dispatch(removeUser());
        this.router.navigate(['/auth']);
        return of(logoutSuccess());
      })
    )
  );
}
