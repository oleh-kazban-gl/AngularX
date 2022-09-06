import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { ICardPost } from '@gl/components';
import { FeedService } from './feed.service';

@Injectable()
export class FeedPostResolver implements Resolve<ICardPost> {
  constructor(
    private feedService: FeedService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICardPost> {
    console.log('route: ', route);
    console.log('state: ', state);

    return this.feedService.getPost(route.paramMap.get('id') as string) as Observable<ICardPost>;
  }
}
