import { createAction, props } from '@ngrx/store'

export const loadLanguage = createAction('[App Component] Load Language'); 
export const loadLanguageSuccess = createAction('[App Component] Load Language Success'); 
export const setLanguage = createAction('[App Component] Set Language', props<{language: string}>() ); 