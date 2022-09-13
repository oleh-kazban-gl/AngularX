import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IPost } from './state+/posts/posts.models';
import { getFeed, isFeedLoaded, isFeedLoading } from './state+/feed/feed.selectors';
import { loadFeed } from './state+/feed/feed.actions';
import { IGridOptions } from '@gl/components';
import { IFeedPartialState } from './state+/feed/feed.reducer';

@Component({
  selector: 'gl-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  posts$!: Observable<Array<IPost>>;
  isLoading$!: Observable<boolean>;

  constructor(
    private store: Store<IFeedPartialState>
  ) {
    // this.store.dispatch(loadFeed({}));

    this.store.pipe(select(isFeedLoaded)).subscribe(isFeedLoaded => {
      if (!isFeedLoaded) {
        this.store.dispatch(loadFeed({}));
      }
    })
  }

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(getFeed));
    this.isLoading$ = this.store.pipe(select(isFeedLoading));
  }

  onGridOptionsChange(gridOptions: IGridOptions): void {
    this.store.dispatch(loadFeed({
      options: gridOptions
    }));
  }
}
