import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to check date format (dd/MM/yyyy)
export const datePatternValidator: ValidatorFn = (control: AbstractControl) => {
  const pattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;

  if (!pattern.test(control.value)) {
    return { invalidDate: true };
  }

  const value = control.value;

  if (value && !/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    return { invalidDate: true };
  }
  return null;
};
