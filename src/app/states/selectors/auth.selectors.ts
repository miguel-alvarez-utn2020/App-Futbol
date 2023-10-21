import { createSelector } from '@ngrx/store';
import { AppState } from '../state';

export const SelectAuthStates = (state: AppState) => state;


export const selectLoggedIn = createSelector(
    SelectAuthStates,
    (state: AppState) => state.authState.loggedIn
)