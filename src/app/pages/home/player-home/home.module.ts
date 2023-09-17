import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
