import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// o
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AuthRepositoryImplementation } from './pages/data/implementation/auth.repository';
import { GroupRepositoryImplementation } from './pages/data/implementation/group.repository';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appState } from './states/state';
import { EffectsModule } from '@ngrx/effects';
import { LanguageEffects } from './states/effects/language.effects';
import { AuthEffects } from './states/effects/auth.effects';
import { UserEffects } from './states/effects/user.effects';
import { Effects } from './states/effects'
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appState),
    StoreDevtoolsModule .instrument(),
    EffectsModule.forRoot([...Effects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthRepositoryImplementation,
    GroupRepositoryImplementation,
    HttpClient,
    AuthGuard,
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
