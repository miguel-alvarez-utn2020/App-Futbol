import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { AuthService, TOKEN } from 'src/app/pages/services/auth.service';
import { login, loginSuccess, loginFailure, loadUser, logout, logoutSuccess, removeUser, register, registerSuccess, registerFailure } from '../../states';
import { StorageService } from '../../pages/services/storage.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  private store = inject(Store);
  private router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.login(action.credentials).pipe(
          map(({ user, token }) => {
            this.storageService.setItem(TOKEN, token);
            this.store.dispatch(loadUser({user}))
            this.router.navigate(['/home']);
            return loginSuccess()
          }),
          catchError((error) => of(loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap((action) => {
        const {email, password} = action.userCreate;
        const credentials = {
            email,
            password
        }
         return this.authService.register(action.userCreate).pipe(
            map(() => {
              this.store.dispatch(login({credentials}))
              return registerSuccess()
            }),
            catchError((error) => of(registerFailure({ error })))
          )
      })
    )
  );

  logout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(logout),
    mergeMap(() => {
        this.storageService.removeAllItems();
        this.store.dispatch(removeUser());
        this.router.navigate(['/']);
        return of(logoutSuccess());
    }),
  )
);

  
}
