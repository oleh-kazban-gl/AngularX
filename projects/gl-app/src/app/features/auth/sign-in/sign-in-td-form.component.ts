import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface ILogin {
  email: string;
  password: string;
}

@Component({
  selector: 'gl-login',
  templateUrl: './sign-in-td-form.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInTDFormComponent implements OnInit {
  public signIn: ILogin = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log('login: ', this.signIn);
  }

}
