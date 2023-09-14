import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './shared/button/button.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { InputComponent } from './shared/input/input.component';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';


const components = [ButtonComponent, InputComponent, ErrorMsgComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[...components]
})
export class ComponentsModule { }
