import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ACTIVE_GROUP } from 'src/app/pages/services/auth.service';
import { StorageService } from 'src/app/pages/services/storage.service';
import { Store } from '@ngrx/store';
import { GroupService } from 'src/app/pages/services/group.service';
import { ModalController, PopoverController } from '@ionic/angular';
import {
  userSync,
  createGroup,
  createGroupSuccess,
  createGroupFailure,
  selectGroup,
  selectGroupSuccess,
  joinGroup,
  joinGrouppFailure,
  sendAdmin
} from '@app/state/actions';
import { UtilsService } from 'src/app/pages/services/utils.service';
import { ToastTypeColors } from 'src/app/services/shared/toast.service';
import { ErrorsService } from 'src/app/pages/services/errors.service';

@Injectable()
export class GroupEffects {
    private actions$ = inject(Actions);
    private storageService = inject(StorageService);
    private store = inject(Store);
    private groupService = inject(GroupService);
    private modalController = inject(ModalController);
    private popoverController = inject(PopoverController);
    private errorsService = inject(ErrorsService);
    
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
          catchError((res) => {
            this.errorsService.showError(res.status, 'createGroup', ToastTypeColors.DANGER);
            return of(createGroupFailure({ error: res.error }));
          })
        )
      )
    )
    );

    joinGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(joinGroup),
      exhaustMap((action) =>
        this.groupService.joinGroup(action.groupCode).pipe(
          map(() => {
            this.popoverController.dismiss();
            return userSync();
          }),
          catchError((res) => {
            this.errorsService.showError(res.status, 'joinGroup', ToastTypeColors.DANGER);
            return of(joinGrouppFailure({ error: res.error }));
          })
        )
      )
    )
    );

    sendAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendAdmin),
      exhaustMap((action) =>
        this.groupService.sendAdmin(action.groupId, action.playerId).pipe(
          map(() => {
            return userSync();
          }),
          catchError(({ error }) => {
            // this.utilsService.showToast(ERROR_JOIN_GROUP, ToastTypeColors.DANGER);
            return of(joinGrouppFailure({ error }));
          })
        )
      )
    )
    );
    
    selectGroup$ = createEffect(() => this.actions$.pipe(
    ofType(selectGroup),
      exhaustMap((action)=> {
        console.log(action.groupId);
        
        return this.groupService.getGroupById(action?.groupId).pipe(
          map((group)=>{
            this.storageService.setItem(ACTIVE_GROUP, group.id);
            return selectGroupSuccess({group});
          }),
        )
      })
    ));
}
