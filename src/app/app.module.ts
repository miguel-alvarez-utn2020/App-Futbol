import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// o
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  IonicModule,
  IonicRouteStrategy,
} from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { RegisterGroupComponent } from './pages/components/register-group/register-group.component';
import { AuthRepositoryImplementation } from './pages/data/implementation/auth.repository';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthRepositoryImplementation],
  bootstrap: [AppComponent],
})
export class AppModule {}
