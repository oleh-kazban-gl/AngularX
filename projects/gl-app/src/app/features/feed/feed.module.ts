import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { FeedStateModule } from './state+/feed-state.module';
import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';
import { FeedService } from './feed.service';
import { FeedPostResolver } from './feed-post.resolver';
import { FeedPostGuard } from './feed-post.guard';


@NgModule({
  declarations: [
    FeedComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FeedRoutingModule,
    FeedStateModule
  ],
  providers: [FeedService, FeedPostResolver, FeedPostGuard]
})
export class FeedModule { }
