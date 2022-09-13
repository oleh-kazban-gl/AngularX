import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, IPostsState, IPostsPartialState, postsAdapter, IPostData } from './posts.reducer';

interface PostId {
  id: string;
}

export const { selectEntities } = postsAdapter.getSelectors();
export const getPostsState = createFeatureSelector<IPostsPartialState, IPostsState>(POSTS_FEATURE_KEY);

export const selectPostsEntities = createSelector(getPostsState, selectEntities);
export const selectCurrentPostById = createSelector(selectPostsEntities, (entities: Dictionary<IPostData>, { id }: PostId) => id && entities[id] ? entities[id]?.data : null);
export const selectCurrentPostByIdLoaded = createSelector(selectPostsEntities, (entities: Dictionary<IPostData>, { id }: PostId) => entities[id]?.loaded);
