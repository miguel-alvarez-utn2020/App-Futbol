import { createAction, props } from '@ngrx/store';
import { User } from '../../pages/domain/models/User';


export const loadUser = createAction('[Login] Load User',props<{ user: User }>());

export const removeUser = createAction('[home player] Remove User');

export const userSync = createAction('[App] User Sync');
export const userSyncSuccess = createAction('[App] User Sync Success');
export const userSyncFailure = createAction('[App] User Sync Failure');


