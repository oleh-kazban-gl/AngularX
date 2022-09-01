import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInTDFormComponent } from './sign-in/sign-in-td-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'sign-out',
    component: SignOutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
