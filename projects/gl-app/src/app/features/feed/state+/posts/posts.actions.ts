import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';
import { IPost } from './posts.models';


export const loadPostById = createAction(
  '[Feed] Load Post by ID',
  props<{ id: string }>()
);

export const loadPostByIdSuccess = createAction(
  '[Feed] Load Post by ID Success',
  props<{ id: string, data: IPost }>()
);

export const loadPostByIdFailure = createAction(
  '[Feed] Load Post by ID Failure',
  props<{ id: string, error: HttpErrorResponse }>()
);
