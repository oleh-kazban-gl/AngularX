import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { GridComponent } from './grid/grid.component';
import { GridService } from './grid/grid.service';
import { CardComponent } from './card/card.component';
import { CardProjectionComponent } from './card-projection/card-projection.component';

@NgModule({
  declarations: [
    GridComponent,
    CardComponent,
    CardProjectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GridComponent
  ],
  providers: [GridService]
})
export class SharedModule { }
