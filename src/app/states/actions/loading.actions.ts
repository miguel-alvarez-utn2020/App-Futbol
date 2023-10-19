import { createAction, props } from '@ngrx/store'

export const loading = createAction('[Counter Component] Loading', props<{isLoading: boolean}>()); 