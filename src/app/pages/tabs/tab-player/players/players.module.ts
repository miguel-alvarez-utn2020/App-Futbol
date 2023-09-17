import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayersPage } from './players.page';

import { PlayersPageRoutingModule } from './players-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlayersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlayersPage]
})
export class PlayersPageModule {}
