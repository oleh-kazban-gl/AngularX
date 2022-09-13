import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';;
import { currentPageInitialState, currentPageReducer, CURRENT_PAGE_FEATURE_KEY, log, reducers, rootInitialState } from './state+/root.reducer';
import { StoreRouterStateSerializer } from './state+/store-router-state.serializer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      initialState: rootInitialState,
      metaReducers: !environment.production ? [log] : [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreModule.forFeature(CURRENT_PAGE_FEATURE_KEY, currentPageReducer, {
      initialState: currentPageInitialState
    }),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation,
      serializer: StoreRouterStateSerializer
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class AppStateModule { }


