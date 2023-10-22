import { createReducer, on} from '@ngrx/store'
import { ActiveGroupState, GroupsState, UserState } from '../models/models'
import { selectGroupSuccess } from '@app/state/actions';

const initialState: ActiveGroupState = {
  group: null
}

const _activeGroupReducer = createReducer(
    initialState,
    on(selectGroupSuccess, (state, {group}) => ({...state, group})),
   
)

export function activeGroupReducer(state: any, action: any){
    return _activeGroupReducer(state, action)  
}