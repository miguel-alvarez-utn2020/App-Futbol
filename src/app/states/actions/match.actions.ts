import { CreateGroup, Group } from 'src/app/pages/domain/models/Group';
import { createAction, props } from '@ngrx/store';
import { CreateMatch, Match } from 'src/app/pages/domain/models/Match';

export const createMatch = createAction('[Records Tab] Create Match', props<{match: CreateMatch}>());
export const createMatchSuccess = createAction('[Records Tab] Create Match Success', props<{match: Match}>);
export const createMatchFailure = createAction('[Records Tab] Create Match Failure', props<{error: any}>());