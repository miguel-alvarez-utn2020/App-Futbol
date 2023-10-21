import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUser, userSync, userSyncSuccess, userSyncFailure } from '../actions/user.actions';
import { exhaustMap, map, catchError} from 'rxjs/operators';
import { of  } from 'rxjs';
import { AuthService, TOKEN } from 'src/app/pages/services/auth.service';
import { StorageService } from 'src/app/pages/services/storage.service';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/app/services/shared/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { ERROR_USER_SYNC } from '../../pages/constants/translates.errors';
import { loginSuccess } from '../actions/auth.actions';
import { loadLanguage } from '../actions/language.actions';


@Injectable()
export class UserEffects {
    private actions$ = inject(Actions);
    private authService = inject(AuthService);
    private storageService = inject(StorageService)
    private store = inject(Store);
    private toastService = inject(ToastService)
    private translate = inject(TranslateService);

    userSync$ = createEffect(() => 
        this.actions$.pipe(
            ofType(userSync),
            exhaustMap(()=> {
                const token = this.storageService.getItem(TOKEN)
                return this.authService.checkToken(token).pipe(
                    map(({user}) => {
                        this.store.dispatch(loadUser({user}));
                        this.store.dispatch(loginSuccess());
                        return userSyncSuccess()
                    }),
                    catchError(() => {
                        this.translate.get(ERROR_USER_SYNC).subscribe({
                            next: (translateText) => {
                              this.toastService.showToast(translateText, 'danger');
                            },
                          });
                        return of(userSyncFailure())
                    })
                )
            })
        )
    )

}