import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JoinGroupComponent } from './join-group/join-group.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { RegisterMathComponent } from './register-math/register-math.component';

const component = [RegisterGroupComponent, JoinGroupComponent, ItemGroupComponent];

@NgModule({
  declarations: [...component, RegisterMathComponent, ],
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
