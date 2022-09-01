import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordEqualityValidator = function (control: AbstractControl): ValidationErrors | null {
  const passwordControl = control.parent?.get('password');
  const passwordConfirmationControl = control.parent?.get('passwordConfirmation');

  return passwordControl && passwordConfirmationControl
    ? passwordControl.value !== passwordConfirmationControl.value
      ? { passwordEquality: `Passwords are not equal` }
      : null
    : null;
}
