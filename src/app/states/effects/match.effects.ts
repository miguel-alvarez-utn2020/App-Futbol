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
  selectGroupSuccess,
  createMatch,
  createMatchFailure,
  joinMatch,
  joinMatchFailure,
  quitMatch
} from '@app/state/actions';
import { MatchService } from 'src/app/pages/services/match.service';

@Injectable()
export class MatchEffects {
    private actions$ = inject(Actions);
    private storageService = inject(StorageService);
    private store = inject(Store);
    private matchService = inject(MatchService);
    private modalController = inject(ModalController);


    createMatch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createMatch),
      exhaustMap((action) =>
        this.matchService.create(action.groupId, action.match).pipe(
          map(() => {
            this.modalController.dismiss();
            return userSync();
          }),
          catchError((res) => {
            //controlar error
            return of(createMatchFailure({ error: res.error }));
          })
        )
      )
    )
    );

    joinMatch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(joinMatch),
      exhaustMap((action) =>
        this.matchService.join(action.matchId, action.playerId).pipe(
          map(() => {
            return userSync();
          }),
          catchError((res) => {
            //controlar error
            return of(joinMatchFailure({ error: res.error }));
          })
        )
      )
    )
    );

    quitMatch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(quitMatch),
      exhaustMap((action) =>
        this.matchService.quit(action.matchId, action.playerId).pipe(
          map(() => {
            return userSync();
          }),
          catchError((res) => {
            //controlar error
            return of(joinMatchFailure({ error: res.error }));
          })
        )
      )
    )
    );

}
