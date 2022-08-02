import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { GridComponent } from './grid/grid.component';
import { GridService } from './grid/grid.service';

@NgModule({
  declarations: [
    GridComponent
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
