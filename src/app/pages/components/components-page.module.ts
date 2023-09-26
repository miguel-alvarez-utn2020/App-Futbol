import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const component = [RegisterGroupComponent];

@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...component],
})
export class ComponentsPageModule {}
