import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PasswordStrengthValidator, PasswordEqualityValidator } from '@gl/components';

@Component({
  selector: 'gl-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
    passwordConfirmation: new FormControl('', [Validators.required, PasswordEqualityValidator]),
  });

  get firstName(): FormControl {
    return <FormControl>this.signUpForm.get('firstName');
  }
  get lastName(): FormControl {
    return <FormControl>this.signUpForm.get('lastName');
  }
  get email(): FormControl {
    return <FormControl>this.signUpForm.get('email');
  }
  get password(): FormControl {
    return <FormControl>this.signUpForm.get('password');
  }
  get passwordConfirmation(): FormControl {
    return <FormControl>this.signUpForm.get('passwordConfirmation');
  }

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log('login: ', this.signUpForm.value);
  }
}
