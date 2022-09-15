import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';

import { IPost, loadPostById } from '../state+';
import { IPostData, IPostsPartialState } from '../state+/posts/posts.reducer';
import { selectCurrentPostById, selectCurrentPostByIdLoaded } from '../state+/posts/posts.selectors';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const getCookies = '<pre>Injected dangerous value: <img src="x" onError="javascript:console.log({ cookies: window.document.cookie })"/></pre>';
@Component({
  selector: 'gl-post',
  // templateUrl: './post.component.html',
  template: `<div>Security check</div>
  <pre>
    <span>interpolation</span>
    <div>{{comment}}</div>
  </pre>

  <pre>
    <span>[innerText]</span>
    <div [innerText]="comment"></div>
  </pre>

  <pre>
    <span>[innerHTML]</span>
    <div [innerHTML]="comment"></div>
  </pre>

  <pre>
    <span>URL</span>
    <img src='{{url}}'>
  </pre>

    <pre> interpolated dengerous value: {{ cookies }}</pre>
      ` + getCookies,
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post$!: Observable<IPost | null | undefined>;
  public imageUrl: string | undefined;
  public comment: string | undefined;

  private id$!: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IPostsPartialState>,
    private sanitizer: DomSanitizer
  ) {
    this.id$ = this.activatedRoute.paramMap.pipe(
      map(params => params.get('id') || '')
    )
    this.imageUrl = this.randomImage;
    this.comment = 'Received package. <b>Excellent service.</b><script>alert("Hey");</script> <i>Highly recommended.</i>'
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

  get url() {
    return 'http://google.com'; // // 'http://localhost:4200/assets/123.jpg'
  }

  get randomImage(): string {
    return `http://placeimg.com/${Math.floor(Math.random() * 1000)}/${Math.floor(Math.random() * 1000)}`
  }

  get script(): string {
    return `<script>alert('Hey')</script>`;
  }

  get cookies(): string {
    return '<pre>Injected dangerous value: <img src="x" onError="javascript:alert("Hey")"/></pre>'
  }

  getSanitizedUrl(url: string) {
    const sanitizedValue = this.sanitizer.sanitize(SecurityContext.URL, url);

    return this.sanitizer.bypassSecurityTrustUrl(<string>sanitizedValue);
  }

}
