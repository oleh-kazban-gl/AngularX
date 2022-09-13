import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
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
