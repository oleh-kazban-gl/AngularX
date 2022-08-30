import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { FeedService } from './feed.service';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FeedRoutingModule,
  ],
  providers: [FeedService]
})
export class FeedModule { }
