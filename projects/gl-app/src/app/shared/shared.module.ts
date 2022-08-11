import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { GridComponent } from './components/grid/grid.component';
import { CardComponent } from './components/card/card.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { NoDataPipe } from './pipes/no-data.pipe';
import { IdentityDirective } from './directives/identity.directive';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { CardService } from './components/card-post/card.service';
import { InjectionToken } from '@angular/core';

const appEndpoints = {
  base: 'http://localhost:4200',
  feed: '/feed',
  home: '/home',
  about: '/about',
  api: '/api'
};
export const APP_ENDPOINTS = new InjectionToken<any>('appEndpoints');

@NgModule({
  declarations: [
    GridComponent,
    CardComponent,
    CardPostComponent,
    NoDataComponent,
    NoDataPipe,
    IdentityDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GridComponent
  ],
  providers: [
    DataService,
    UserService,
    CardService,
    {
      provide: APP_ENDPOINTS,
      useValue: appEndpoints
    }
  ]
})
export class SharedModule { }
