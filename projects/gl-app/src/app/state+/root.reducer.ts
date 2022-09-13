import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, createReducer, on } from '@ngrx/store';

import { RouterUrlState, CurrentPageState } from './root.model';
import * as RootActions from './root.actions';

export const ROUTER_FEATURE_KEY = 'router';
export const CURRENT_PAGE_FEATURE_KEY = 'currentPage';

export interface RouterState {
  [ROUTER_FEATURE_KEY]: RouterReducerState<RouterUrlState>
}

export const rootInitialState: RouterState = {
  [ROUTER_FEATURE_KEY]: null as any
}

export const reducers: ActionReducerMap<RouterState> = {
  [ROUTER_FEATURE_KEY]: routerReducer,
}

export interface CurrentPagePartialState {
  readonly [CURRENT_PAGE_FEATURE_KEY]: CurrentPageState;
}

export const currentPageInitialState: CurrentPageState = {
  title: ''
}

export const currentPageReducer = createReducer(
  currentPageInitialState,
  on(RootActions.setCurrentRoute, (state, action) => ({
    ...currentPageInitialState,
    title: action.data.title
  }))
)

export function log(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

