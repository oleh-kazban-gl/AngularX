import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFeedPartialState, FEED_FEATURE_KEY, IFeedState } from './feed.reducer';

export const getFeedState = createFeatureSelector<IFeedPartialState, IFeedState>(FEED_FEATURE_KEY);

export const getFeed = createSelector(getFeedState, (state) => state.posts);
export const isFeedLoading = createSelector(getFeedState, (state) => state.isLoading && !state.loaded);
export const isFeedLoaded = createSelector(getFeedState, (state) => state.loaded);
