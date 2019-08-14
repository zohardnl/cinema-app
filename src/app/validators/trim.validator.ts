import { AbstractControl } from '@angular/forms';

export function trimValue(control: AbstractControl): { [key: string]: boolean } | null {
    let val = control.value.trim();

  if (!(val !== null && val !== undefined && val !== "")) {
    return { val: true };
  }
  return null;
}