import { ActionReducerMap } from '@ngrx/store'
import * as re from '../states';



export interface AppState {
    loading: re.LoadingState,
}

export const appState: ActionReducerMap<AppState> = {
    loading: re.loadingReducer,
}