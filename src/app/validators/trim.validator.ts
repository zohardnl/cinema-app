import { AbstractControl } from "@angular/forms";

export function trimValue(control: AbstractControl): { [key: string]: boolean } | null {
	if (control.value) {
		let val = control.value.trim();
		if (!val) {
			return { val: true };
		}
		return null;
	}
}
