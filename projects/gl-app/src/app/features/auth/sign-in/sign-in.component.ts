import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gl-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get email(): FormControl {
    return <FormControl>this.signInForm.get('email');
  }
  get password(): FormControl {
    return <FormControl>this.signInForm.get('password');
  }

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log('login: ', this.signInForm.value);
  }

}
