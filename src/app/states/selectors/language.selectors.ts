import { createSelector } from '@ngrx/store';
import { AppState } from '../state';

export const SelectLanguageState = (state: AppState) => state;


export const languageSelected = createSelector(
    SelectLanguageState,
    (state: AppState) => state.language
)