import { createReducer, on} from '@ngrx/store'

import { loading } from '../actions/loading.actions';
import { LoadingState, AuthState } from '../models/models'
import { loginSuccess } from '../actions/auth.actions';

const initialState: AuthState = {
  loggedIn: false
}

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state) => ({...state, loggedIn: true}))
)

export function authReducer(state: any, action: any){
    return _authReducer(state, action)
}