import { Action, createReducer, on } from '@ngrx/store';

import * as FeedActions from './feed.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { IFeed } from './feed.models';

export const FEED_FEATURE_KEY = 'feed';

export interface IFeedState extends IFeed {
  loaded: boolean;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}
export interface IFeedPartialState {
  readonly [FEED_FEATURE_KEY]: IFeedState
}

const initialState: IFeedState = {
  posts: [],
  loaded: false,
  isLoading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(FeedActions.loadFeed, state => {
    return { ...state, loaded: false, isLoading: true, error: null };
  }),
  on(FeedActions.loadFeedSuccess, (state, { data }) => {
    return { ...state, posts: data, loaded: true, isLoading: false, error: null };
  }),
  on(FeedActions.loadFeedFailure, (state, { error }) => {
    return { ...state, loaded: true, isLoading: false, error };
  })
);
