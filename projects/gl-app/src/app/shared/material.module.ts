import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
];

@NgModule({
  imports: [
    ...material
  ],
  exports: [
    ...material
  ],
})
export class MaterialModule { }
