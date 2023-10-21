import { createReducer, on} from '@ngrx/store'
import { UserState } from '../models/models'
import { loadUser, removeUser } from '../actions/user.actions';

const initialState: UserState = {
  user: null
}

const _userReducer = createReducer(
    initialState,
    on(loadUser, (state, {user}) => ({...state, user})),
    on(removeUser, (state) => ({...state, user: null})),
)

export function userReducer(state: any, action: any){
    return _userReducer(state, action)
}