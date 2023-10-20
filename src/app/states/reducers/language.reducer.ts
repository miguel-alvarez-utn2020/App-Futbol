import { createReducer, on} from '@ngrx/store'
import { Language } from '../models/models'
import { loadLanguage, loadLanguageSuccess, setLanguage } from '../actions/language.actions';

const initialState: Language = {
  language: 'en'
}

const _LanguageReducer = createReducer(
    initialState,
    on(loadLanguage, (state ) => ({...state})),
    on(loadLanguageSuccess, (state) => ({...state})),
    on(setLanguage, (state,{language}) => ({...state, language})),
)

export function languageReducer(state: any, action: any){
    return _LanguageReducer(state, action)
}