import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/pages/services/auth.service';
import { login, loginSuccess, loginFailure, loadUser } from '../../states'

 
@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(action => this.authService.login(action.credentials)
        .pipe( map(({user}) => loadUser({ user } )), 
            catchError(error => of(loginFailure({error})))    
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

}