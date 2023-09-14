import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './shared/button/button.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { InputComponent } from './shared/input/input.component';
import { ErrorMsgComponent } from './shared/input/error-msg/error-msg.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/card/header/header.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatetimeComponent } from './shared/datetime/datetime.component';


const components = [ButtonComponent, InputComponent, ErrorMsgComponent, CardComponent, HeaderComponent, AvatarComponent, CheckboxComponent, DatetimeComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[...components]
})
export class ComponentsModule { }
