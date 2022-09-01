import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '@gl/material';
import { SignInTDFormComponent } from './sign-in/sign-in-td-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignInTDFormComponent,
    SignUpComponent,
    SignOutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
