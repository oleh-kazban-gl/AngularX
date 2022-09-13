import { Params, RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterUrlState } from './root.model';

export class StoreRouterStateSerializer implements RouterStateSerializer<RouterUrlState> {
  serialize(routerState: RouterStateSnapshot): RouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;

    const { params } = route;

    return { url, params, queryParams };
  }
}
