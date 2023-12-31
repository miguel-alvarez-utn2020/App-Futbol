import { createReducer, on} from '@ngrx/store'
import { UserState } from '../models/models'
import { loadUser, removeUser, userSyncSuccess } from '../actions/user.actions';

const initialState: UserState = {
  user: null,
}

const _userReducer = createReducer(
    initialState,
    on(loadUser, (state, {user}) => ({...state, user})),
    on(removeUser, (state) => ({...state, user: null})),
    on(userSyncSuccess, (state) => ({...state})),
)

export function userReducer(state: any, action: any){
    return _userReducer(state, action)  
}