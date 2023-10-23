import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonComponent } from './shared/button/button.component';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './shared/input/input.component';
import { ErrorMsgComponent } from './shared/input/error-msg/error-msg.component';
import { CardComponent } from './shared/card/card.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatetimeComponent } from './shared/datetime/datetime.component';
import { FabButtonComponent } from './shared/fab-button/fab-button.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SelectComponent } from './shared/select/select.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HeaderToolbarComponent } from './shared/header-toolbar/header-toolbar.component';
import { MatchCalendarComponent } from './shared/emotional-calendar/match-calendar.component';
import { ItemComponent } from './shared/item/item.component';
import { ModalHeaderComponent } from './shared/modal-header/modal-header.component';
import { ModalFooterComponent } from './shared/modal-footer/modal-footer.component';
import { CardPlayerComponent } from './shared/card-player/card-player.component';
import { BtnMessageComponent } from './shared/btn-message/btn-message.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const components = [
  ButtonComponent,
  InputComponent,
  ErrorMsgComponent,
  CardComponent,
  AvatarComponent,
  CheckboxComponent,
  DatetimeComponent,
  FabButtonComponent,
  MenuComponent,
  SelectComponent,
  HeaderToolbarComponent,
  MatchCalendarComponent,
  ItemComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
  CardPlayerComponent,
  BtnMessageComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [...components],
  providers:[
    DatePipe
  ]
})
export class ComponentsModule {}
