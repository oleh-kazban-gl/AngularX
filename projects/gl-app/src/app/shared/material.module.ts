import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const material = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
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
