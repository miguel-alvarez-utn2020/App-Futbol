import { createAction, props } from '@ngrx/store';
import { GenerateHistory } from 'src/app/pages/domain/models/HistoryMatch';
import { CreateMatch, Match } from 'src/app/pages/domain/models/Match';

export const createMatch = createAction('[Records Tab] Create Match', props<{groupId: string, match: CreateMatch}>());
export const createMatchSuccess = createAction('[Records Tab] Create Match Success', props<{match: Match}>);
export const createMatchFailure = createAction('[Records Tab] Create Match Failure', props<{error: any}>());

export const joinMatch = createAction('[Match Tab] join Match', props<{matchId: string, playerId: string}>());
// export const joinMatchSuccess = createAction('[Records Tab] join Match Success', props<{match: Match}>);
export const joinMatchFailure = createAction('[Match Tab] join Match Failure', props<{error: any}>());

export const quitMatch = createAction('[Match Tab] Quit Match', props<{matchId: string, playerId: string}>());
// export const joinMatchSuccess = createAction('[Records Tab] join Match Success', props<{match: Match}>);
export const quitMatchFailure = createAction('[Match Tab] Quit Match Failure', props<{error: any}>());

export const generateHistoryMatch = createAction('[Match Tab] Generate History Match', props<{generateHistory: GenerateHistory}>());
// export const joinMatchSuccess = createAction('[Records Tab] join Match Success', props<{match: Match}>);
export const generateHistoryFailure = createAction('[Match Tab] Generate History Match Failure', props<{error: any}>());