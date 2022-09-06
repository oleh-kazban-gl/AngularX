import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { DesignersComponent } from './designers/designers.component';
import { DevelopersComponent } from './developers/developers.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [
      {
        path: 'management', component: ManagementComponent
      },
      {
        path: 'developers', component: DevelopersComponent
      },
      {
        path: 'designers', component: DesignersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
