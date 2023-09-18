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
import { FabButtonComponent } from './shared/fab-button/fab-button.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SelectComponent } from './shared/select/select.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const components = [
  ButtonComponent,
  InputComponent,
  ErrorMsgComponent,
  CardComponent,
  HeaderComponent,
  AvatarComponent,
  CheckboxComponent,
  DatetimeComponent,
  FabButtonComponent,
  MenuComponent,
  SelectComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  }),],
  exports: [...components],
})
export class ComponentsModule {}
