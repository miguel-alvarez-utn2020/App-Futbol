import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayersPage } from './players.page';

import { PlayersPageRoutingModule } from './players-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ComponentsPageModule } from 'src/app/pages/components/components-page.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlayersPageRoutingModule,
    ComponentsModule,
    ComponentsPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [PlayersPage]
})
export class PlayersPageModule {}
