import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPostResolver } from './feed-post.resolver';

import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';
import { FeedPostGuard } from './feed-post.guard';

const routes: Routes = [
  { path: '', component: FeedComponent },
  // { path: ':id', component: PostComponent },
  // {
  //   path: ':id', component: PostComponent, data: {
  //     breadcrumbNode: 'Post'
  //   }
  // },
  // { path: ':id', component: PostComponent, canActivate: [FeedPostGuard] },
  { path: ':id', component: PostComponent, resolve: { post: FeedPostResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
