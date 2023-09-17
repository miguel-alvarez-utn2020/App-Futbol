import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabPlayerPageRoutingModule } from './tab-player-routing.module';
import { TabPlayerPage } from './tab-player.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabPlayerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabPlayerPage]
})
export class TabPlayerPageModule {}
