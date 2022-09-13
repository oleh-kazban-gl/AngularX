import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';

import { IGridOptions } from '@gl/components';
import { IPost } from '../posts/posts.models';

export const loadFeed = createAction(
  '[Feed] Load Feed',
  props<{ options?: IGridOptions }>()
);

export const loadFeedSuccess = createAction(
  '[Feed] Load Feed Success',
  props<{ data: Array<IPost> }>()
);

export const loadFeedFailure = createAction(
  '[Feed] Load Feed Failure',
  props<{ error: HttpErrorResponse }>()
);
