import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs';

import * as FeedActions from './feed.actions';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../posts/posts.models';

const url = `/api/posts`;

@Injectable()
export class FeedEffects {
  loadFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.loadFeed),
      tap(action => { console.log('action: ', action) }),
      mergeMap((action) => this.http.get<Array<IPost>>(url, { params: action.options ? <any>action.options : null })
        .pipe(
          map(data => FeedActions.loadFeedSuccess({ data })),
          catchError(error => [FeedActions.loadFeedFailure({ error })])
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }
}
