import { createReducer, on} from '@ngrx/store'
import { UserState } from '../models/models'
import { loadUser } from '../actions/user.actions';

const initialState: UserState = {
  user: null
}

const _UserReducer = createReducer(
    initialState,
    on(loadUser, (state, {user}) => ({...state, user})),
)

export function UserReducer(state: any, action: any){
    return _UserReducer(state, action)
}