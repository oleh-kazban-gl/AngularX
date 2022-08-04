import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { CardPostComponent } from './card-post/card-post.component';
import { NoDataComponent } from './no-data/no-data.component';

@NgModule({
  declarations: [
    GridComponent,
    CardComponent,
    CardPostComponent,
    NoDataComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GridComponent
  ],
})
export class SharedModule { }
