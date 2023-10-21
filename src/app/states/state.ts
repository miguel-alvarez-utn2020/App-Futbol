import { ActionReducerMap } from '@ngrx/store'
import * as re from '../states';
import { authReducer } from './reducers/auth.reducers';



export interface AppState {
    loading: re.LoadingState,
    language: re.Language,
    userState: re.UserState,
    authState: re.AuthState
}

export const appState: ActionReducerMap<AppState> = {
    loading: re.loadingReducer,
    language: re.languageReducer,
    userState: re.userReducer,
    authState: re.authReducer
}