import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const declarations = [
  MainLayoutComponent
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    ...declarations
  ]
})
export class CoreModule { }
