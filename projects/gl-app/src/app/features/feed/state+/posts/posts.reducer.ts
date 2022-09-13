import { HttpErrorResponse } from '@angular/common/http';

import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as PostsActions from './posts.actions';
import { IPost } from './posts.models';

export const POSTS_FEATURE_KEY = 'posts';
export const postsAdapter: EntityAdapter<IPostData> = createEntityAdapter<IPostData>({
  selectId: item => item.id
});
const initialState: IPostsState = postsAdapter.getInitialState({});
const initialEntity: IPostData = {
  id: '',
  data: null,
  loaded: false,
  isLoading: false,
  error: null
}

export interface IPostData {
  id: string;
  data: IPost | null,
  loaded: boolean,
  isLoading: boolean,
  error: HttpErrorResponse | null
}
export interface IPostsState extends EntityState<IPostData> { }
export interface IPostsPartialState {
  readonly [POSTS_FEATURE_KEY]: IPostData
}

export const reducer = createReducer(
  initialState,
  on(PostsActions.loadPostByIdSuccess, (state, { data, id }) => {
    return postsAdapter.addOne({ data, id, error: null, loaded: true, isLoading: false }, { ...state })
  }),
  on(PostsActions.loadPostByIdFailure, (state, { error, id }) => {
    return postsAdapter.addOne({ data: null, id, error, loaded: true, isLoading: false }, { ...state })
  }),
);
