import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MaintanenceComponent } from './maintanence/maintanence.component';
import { MaterialModule } from '@gl/material';
import { TimeoutComponent } from './timeout/timeout.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    UnauthorizedComponent,
    ForbiddenComponent,
    MaintanenceComponent,
    TimeoutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    MaterialModule
  ]
})
export class ErrorsModule { }
