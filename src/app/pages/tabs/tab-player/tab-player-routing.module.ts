import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPlayerPage } from './tab-player.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TabPlayerPage,
    children: [
      {
        path: 'start',
        loadChildren: () => import('../tab-player/start/start.module').then(m => m.StartPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../../../pages/tabs/tab-player/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'players',
        loadChildren: () => import('../../../pages/tabs/tab-player/tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'match',
        loadChildren: () => import('../../../pages/tabs/tab-player/tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/dashboard/start',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabPlayerPageRoutingModule {}
