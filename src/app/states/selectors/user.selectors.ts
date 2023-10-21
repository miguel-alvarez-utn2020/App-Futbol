import { createSelector } from '@ngrx/store';
import { AppState } from '../state';

export const SelectUserStates = (state: AppState) => state;


export const selectUserGroup = createSelector(
    SelectUserStates,
    (state: AppState) => state.userState.user.groups
)