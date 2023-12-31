import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ActiveGroupState } from '@app/state/models';

export const SelecActiveGroupStates = (state: AppState) => state.activeGroup;

export const selectGroupMessage = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.messages
)

export const selectGroupPlayers = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.players
)

export const selectGroupMatch = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.matchs
)

export const selectGroupHistoryMatch = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.historyMatch
)

export const selectGroupId = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.id
)

export const selectGroupAdmins = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.admins
)

export const selectActiveGroup = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state?.group
)

export const selectValorizerPlayers = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.players[0]?.playersValorized
)

export const selectPlayerCreatorGroup = createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => state.group?.players[0]
)

export const selectMainUserPlayer =(userId) => createSelector(
    SelecActiveGroupStates,
    (state: ActiveGroupState) => {
       return state.group?.players?.find(p => p.user?.id === userId);
    }
)



