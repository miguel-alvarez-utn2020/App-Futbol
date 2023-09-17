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
        loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'players',
        loadChildren: () => import('./players/players.module').then(m => m.PlayersPageModule)
      },
      {
        path: 'match',
        loadChildren: () => import('./match/match.module').then(m => m.MatchPageModule)
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
