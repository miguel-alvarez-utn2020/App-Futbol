import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { state } from '@angular/animations';

export const SelectUserStates = (state: AppState) => state;


export const selectUserGroup = createSelector(
    SelectUserStates,
    (state: AppState) => state.userState?.user?.groups
)

export const selectUser = createSelector(
    SelectUserStates,
    (state: AppState) => state.userState
)


