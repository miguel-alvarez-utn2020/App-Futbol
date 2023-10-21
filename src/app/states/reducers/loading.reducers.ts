import { createReducer, on} from '@ngrx/store'

import { loading } from '../actions/loading.actions';
import { LoadingState } from '../models/models'

const initialState: LoadingState = {
  loading: false
}

const _loadingReducer = createReducer(
    initialState,
    on(loading, (state, { isLoading }) => ({...state, loading: isLoading}))
)

export function loadingReducer(state: any, action: any){
    return _loadingReducer(state, action)
}