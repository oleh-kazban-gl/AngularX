import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';

import { IPost, loadPostById } from '../state+';
import { IPostData, IPostsPartialState } from '../state+/posts/posts.reducer';
import { selectCurrentPostById, selectCurrentPostByIdLoaded } from '../state+/posts/posts.selectors';

@Component({
  selector: 'gl-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post$!: Observable<IPost | null | undefined>;

  private id$!: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IPostsPartialState>
  ) {
    this.id$ = this.activatedRoute.paramMap.pipe(
      map(params => params.get('id') || '')
    )
  }

  ngOnInit(): void {
    this.post$ = this.id$.pipe(
      switchMap(id => combineLatest([
        this.store.pipe(select(selectCurrentPostByIdLoaded, { id })),
        this.store.pipe(select(selectCurrentPostById, { id })),
        of(id)
      ])),
      tap(([loaded, post, id]) => {
        if (!loaded) {
          this.store.dispatch(loadPostById({ id }))
        }
      }),
      map(([loaded, post, id]) => post)
    )
  }

}
