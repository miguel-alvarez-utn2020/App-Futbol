import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchPage } from './match.page';

import { MatchPageRoutingModule } from './match-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ComponentsPageModule } from 'src/app/pages/components/components-page.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatchPageRoutingModule,
    ComponentsModule,
    ComponentsPageModule
  ],
  declarations: [MatchPage]
})
export class MatchPageModule {}
