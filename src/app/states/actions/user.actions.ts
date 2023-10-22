import { createAction, props } from '@ngrx/store';
import { User } from '../../pages/domain/models/User';
import { CreateGroup } from 'src/app/pages/domain/models/Group';

export const loadUser = createAction('[Login] Load User',props<{ user: User }>());

export const removeUser = createAction('[home player] Remove User');

export const userSync = createAction('[App] User Sync');
export const userSyncSuccess = createAction('[App] User Sync Success');
export const userSyncFailure = createAction('[App] User Sync Failure');

export const createGroup = createAction('[home player] Create Group', props<{group: CreateGroup}>());
export const createGroupSuccess = createAction('[home player] Create Success');
export const createGroupFailure = createAction('[home player] Create Failure', props<{error: any}>());

export const joinGroup = createAction('[home player] Join Group', props<{groupCode: string}>());
export const joinGroupSuccess = createAction('[home player] Join Success');
export const joinGrouppFailure = createAction('[home player] Join Failure');

export const deleteGroup = createAction('[home player] Delete Group');
export const deleteGroupSuccess = createAction('[home player] Delete Success');
export const deleteGrouppFailure = createAction('[home player] Delete Failure');

export const selectGroup = createAction('[home player] Selected Group');
export const selectGroupSuccess = createAction('[home player] Selected Group Success');
export const selectGroupFailure = createAction('[home player] Selected Group Failure');

