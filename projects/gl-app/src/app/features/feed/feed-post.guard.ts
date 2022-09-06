import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { map, Observable, tap } from 'rxjs';

import { FeedPostResolver } from './feed-post.resolver';

@Injectable()
export class FeedPostGuard implements CanActivate {
  constructor(private resolver: FeedPostResolver, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.resolver.resolve(route, state).pipe(
      map(result => result.requiredIdentity.some(identity => identity === 'user')),
      tap(canActivate => {
        if (!canActivate) {
          this.router.navigateByUrl('/errors/forbidden');
        }
      })
    )
  }
}
