import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService, TOKEN } from 'src/app/pages/services/auth.service';
import { StorageService } from 'src/app/pages/services/storage.service';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/app/services/shared/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { ERROR_USER_SYNC } from '../../pages/constants/translates.errors';
import { loginSuccess } from '../actions/auth.actions';
import { loadLanguage } from '../actions/language.actions';
import { GroupService } from 'src/app/pages/services/group.service';
import { ModalController } from '@ionic/angular';
import {
  loadUser,
  userSync,
  userSyncSuccess,
  userSyncFailure,
  createGroup,
  createGroupSuccess,
  createGroupFailure,
  selectGroup,
  selectGroupSuccess
} from '@app/state/actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  private store = inject(Store);
  private toastService = inject(ToastService);
  private translate = inject(TranslateService);
  private groupService = inject(GroupService);
  private modalController = inject(ModalController);

  userSync$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userSync),
      exhaustMap(() => {
        const token = this.storageService.getItem(TOKEN);
        return this.authService.checkToken(token).pipe(
          map(({ user }) => {
            this.store.dispatch(loadUser({ user }));
            this.store.dispatch(loginSuccess());
            return userSyncSuccess();
          }),
          catchError(() => {
            this.translate.get(ERROR_USER_SYNC).subscribe({
              next: (translateText) => {
                this.toastService.showToast(translateText, 'danger');
              },
            });
            return of(userSyncFailure());
          })
        );
      })
    )
  );

  createGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createGroup),
      exhaustMap((action) =>
        this.groupService.create(action.group).pipe(
          map(() => {
            this.store.dispatch(userSync());
            this.modalController.dismiss();
            return createGroupSuccess();
          }),
          catchError(({ error }) => {
            return of(createGroupFailure({ error }));
          })
        )
      )
    )
  );

  selectGroup$ = createEffect(() => this.actions$.pipe(
    ofType(selectGroup),
      exhaustMap((action)=> {
        return this.groupService.getGroupById(action.groupId).pipe(
          map((group)=>{
            return selectGroupSuccess({group});
          })
        )
      })
    ));
}
