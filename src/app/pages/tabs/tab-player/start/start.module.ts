import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartPage } from './start.page';

import { StartPageRoutingModule } from './start-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StartPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [StartPage]
})
export class StartPageModule {}
