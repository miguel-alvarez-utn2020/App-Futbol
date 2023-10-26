import {AuthEffects, LanguageEffects, UserEffects, GroupEffects, MatchEffects} from '@app/state/effects'
export * from './auth.effects'
export * from './language.effects'
export * from './user.effects'
export * from './group.effects'
export * from './match.effects'

export const Effects = [AuthEffects, LanguageEffects, UserEffects, GroupEffects, MatchEffects];