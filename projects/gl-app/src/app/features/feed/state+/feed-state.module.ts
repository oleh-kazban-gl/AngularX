import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as FeedReducer from './feed/feed.reducer';
import * as PostsReducer from './posts/posts.reducer';
import { FeedEffects } from './feed/feed.effects';
import { PostsEffects } from './posts/posts.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FeedReducer.FEED_FEATURE_KEY, FeedReducer.reducer),
    StoreModule.forFeature(PostsReducer.POSTS_FEATURE_KEY, PostsReducer.reducer),
    EffectsModule.forFeature([FeedEffects, PostsEffects])
  ]
})
export class FeedStateModule { }
