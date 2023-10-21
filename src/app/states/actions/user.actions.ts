import { createAction, props } from '@ngrx/store';
import { User } from '../../pages/domain/models/User';

export const loadUser = createAction(
  '[User] Load User',
  props<{ user: User }>()
);

export const removeUser = createAction('[User] Remove User');

export const userSync = createAction('[User] User Sync');
export const userSyncSuccess = createAction('[User] User Sync Success');
export const userSyncFailure = createAction('[User] User Sync Failure');
