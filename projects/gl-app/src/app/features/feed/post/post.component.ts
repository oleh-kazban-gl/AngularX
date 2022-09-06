import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICardPost } from '@gl/components';
import { combineLatest, filter, map, Observable, of, switchMap } from 'rxjs';
import { FeedService } from '../feed.service';

@Component({
  selector: 'gl-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post$!: Observable<ICardPost>;
  // private id$: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedService: FeedService
  ) {
    this.activatedRoute.params.subscribe(params => console.log('params: ', params));
    this.activatedRoute.data.subscribe(data => console.log('data: ', data));

    // this.id$ = this.activatedRoute.paramMap.pipe(
    //   switchMap(params => of(params.get('id') as string)),
    // );
    // this.post$ = this.id$.pipe(
    //   switchMap((id: string) => this.feedService.getPost(id) as Observable<ICardPost>)
    // )
    this.post$ = this.activatedRoute.data.pipe(
      map(data => data['post'])
    )


    console.log('activated route: ', this.activatedRoute);
  }

  ngOnInit(): void { }

}
