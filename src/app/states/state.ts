import { ActionReducerMap } from '@ngrx/store'
import * as re from '../states';



export interface AppState {
    loading: re.LoadingState,
    language: re.Language,
    userState: re.UserState
}

export const appState: ActionReducerMap<AppState> = {
    loading: re.loadingReducer,
    language: re.languageReducer,
    userState: re.UserReducer
}