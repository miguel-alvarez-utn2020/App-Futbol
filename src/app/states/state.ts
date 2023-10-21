import { ActionReducerMap } from '@ngrx/store';
// import * as re from '../states';
import * as re from '@app/state/models';
import {
  loadingReducer,
  languageReducer,
  userReducer,
  authReducer,
} from '@app/state/reducers';

export interface AppState {
  loading: re.LoadingState;
  language: re.Language;
  userState: re.UserState;
  authState: re.AuthState;
}

export const appState: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  language: languageReducer,
  userState: userReducer,
  authState: authReducer,
};
