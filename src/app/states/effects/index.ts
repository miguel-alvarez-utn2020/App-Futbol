import {AuthEffects, LanguageEffects, UserEffects} from '../effects'
export * from './auth.effects'
export * from './language.effects'
export * from './user.effects'

export const Effects = [AuthEffects, LanguageEffects, UserEffects];