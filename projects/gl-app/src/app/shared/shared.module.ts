import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { GridComponent } from './components/grid/grid.component';
import { CardPostComponent } from './components/card/card.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { NoDataPipe } from './pipes/no-data.pipe';
import { IdentityDirective } from './directives/identity.directive';
import { UserService } from './services/user.service';
import { InjectionToken } from '@angular/core';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const appEndpoints = {
  api: '/api'
};
export const APP_ENDPOINTS = new InjectionToken<any>('appEndpoints');

const components = [
  GridComponent,
  CardPostComponent,
  NoDataComponent,
  AvatarComponent,
  SpinnerComponent
];
@NgModule({
  declarations: [
    NoDataPipe,
    IdentityDirective,
    ...components,

  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ...components
  ],
  providers: [
    UserService,
    {
      provide: APP_ENDPOINTS,
      useValue: appEndpoints
    }
  ]
})
export class SharedModule { }
