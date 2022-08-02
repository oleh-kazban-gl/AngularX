import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feed'
  },
  {
    path: 'feed',
    loadChildren: () => import('./features/feed/feed.module').then((m) => m.FeedModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then((m) => m.AboutModule),
  },
  { path: 'feed', loadChildren: () => import('./features/feed/feed.module').then(m => m.FeedModule) },
  {
    path: '**',
    redirectTo: 'feed'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
