import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs';

import * as PostsActions from './posts.actions';
import { HttpClient } from '@angular/common/http';
import { IPost } from './posts.models';

const url = `/api/posts`;

@Injectable()
export class PostsEffects {
  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPostById),
      tap(action => { console.log('action: ', action) }),
      mergeMap((action) => this.http.get<IPost>(`${url}/${action.id}`)
        .pipe(
          map(data => PostsActions.loadPostByIdSuccess({ id: action.id, data })),
          catchError(error => [PostsActions.loadPostByIdFailure({ id: action.id, error })])
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }
}
