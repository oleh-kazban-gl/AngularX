import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { GridComponent } from './components/grid/grid.component';
import { CardComponent } from './components/card/card.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { NoDataPipe } from './pipes/no-data.pipe';
import { IdentityDirective } from './directives/identity.directive';

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
})
export class SharedModule { }
