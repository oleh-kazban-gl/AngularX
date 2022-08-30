import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { distinctUntilChanged, switchMap, Observable, BehaviorSubject } from 'rxjs';

import { IGridOptions } from '@gl/components';
import { IPost } from './feed.model';
import { FeedService } from './feed.service';

@Component({
  selector: 'gl-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  posts$!: Observable<Array<IPost>>;
  gridOptions$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.gridOptions$.pipe(
      distinctUntilChanged((prev, curr) => {
        return prev?.sorting === curr?.sorting;
      }),
      switchMap(options => this.feedService.getPosts(options))
    );
  }

  onOptionsChange(options: IGridOptions): void {
    this.gridOptions$.next(options);
  }
}
