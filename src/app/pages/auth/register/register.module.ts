import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';

import { RegisterPageRoutingModule } from './register-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegisterPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
