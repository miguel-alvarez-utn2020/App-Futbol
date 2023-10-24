import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ACTIVE_GROUP } from 'src/app/pages/services/auth.service';
import { StorageService } from 'src/app/pages/services/storage.service';
import { Store } from '@ngrx/store';
import { GroupService } from 'src/app/pages/services/group.service';
import { ModalController } from '@ionic/angular';
import {
  userSync,
  createGroup,
  createGroupSuccess,
  createGroupFailure,
  selectGroup,
  selectGroupSuccess
} from '@app/state/actions';

@Injectable()
export class MatchEffects {
    private actions$ = inject(Actions);
    private storageService = inject(StorageService);
    private store = inject(Store);
    private groupService = inject(GroupService);
    private modalController = inject(ModalController);


    // createMatch$ = createEffect(() =>
    // this.actions$.pipe(
    //   ofType(createGroup),
    //   exhaustMap((action) =>
    //     this.groupService.create(action.group).pipe(
    //       map(() => {
    //         this.store.dispatch(userSync());
    //         this.modalController.dismiss();
    //         return createGroupSuccess();
    //       }),
    //       catchError(({ error }) => {
    //         return of(createGroupFailure({ error }));
    //       })
    //     )
    //   )
    // )
    // );
    
    // selectGroup$ = createEffect(() => this.actions$.pipe(
    // ofType(selectGroup),
    //   exhaustMap((action)=> {
    //     return this.groupService.getGroupById(action.groupId).pipe(
    //       map((group)=>{
    //         this.storageService.setItem(ACTIVE_GROUP, group.id);
    //         return selectGroupSuccess({group});
    //       }),
    //     )
    //   })
    // ));
}
