import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import { map, mergeMap, catchError, tap} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { setLanguage } from '../actions/language.actions';

 
@Injectable()
export class LanguageEffects {
    private translate = inject(TranslateService);
    private actions$ = inject(Actions)
    private store = inject(Store<AppState>)
    language: string = ''
    defauldLanguage: string = 'es'

  loadLanguage$ = createEffect(() => this.actions$.pipe(
    ofType('[App Component] Load Language'),
    tap(() => {
        this.language = this.translate.getBrowserLang()
        this.store.dispatch(setLanguage({ language: this.language }));
    }),
    mergeMap(() => this.translate.use(this.language)
      .pipe(
        map(language => ({ type: '[App Component] Load Language Success', payload: language })),
        catchError(() => this.translate.use(this.defauldLanguage))
      ))
    )
  );
 

}