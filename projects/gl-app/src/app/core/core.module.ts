import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
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
    MaterialModule,
    SharedModule
  ],
  exports: [
    ...declarations
  ]
})
export class CoreModule { }
