import { createReducer, on} from '@ngrx/store'

import { AuthState } from '../models/models'
import { loginSuccess, logoutSuccess } from '../actions/auth.actions';

const initialState: AuthState = {
  loggedIn: false
}

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state) => ({...state, loggedIn: true})),
    on(logoutSuccess, (state) => ({...state, loggedIn: false})),
)

export function authReducer(state: any, action: any){
    return _authReducer(state, action)
}