import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const datePatternValidator: ValidatorFn = (control: AbstractControl) => {
  const dateValue = control.value;

  // Kiểm tra xem ngày có đúng định dạng dd/MM/yyyy hay không
  if (dateValue && !/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue)) {
    return { invalidDate: true };
  }

  return null;
};


export function totalGreaterThanDepositValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const depositValue = control.get('deposit').value;
    const totalValue = control.get('total').value;

    if (totalValue <= depositValue) {
      return { totalLessThanDeposit: true };
    }

    return null;
  };
}
