import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@gl/material';
import { SharedModule } from '@gl/shared';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ManagementComponent } from './management/management.component';
import { DevelopersComponent } from './developers/developers.component';
import { DesignersComponent } from './designers/designers.component';
import { AboutService } from './about.service';


@NgModule({
  declarations: [
    AboutComponent,
    ManagementComponent,
    DevelopersComponent,
    DesignersComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [AboutService]
})
export class AboutModule { }
