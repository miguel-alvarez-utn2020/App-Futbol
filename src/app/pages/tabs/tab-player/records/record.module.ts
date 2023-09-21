
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RecordPage } from './record.page';

import { RecordPageRoutingModule } from './record-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecordPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RecordPage]
})
export class RecordPageModule {}
