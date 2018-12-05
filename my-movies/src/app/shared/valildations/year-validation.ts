import { ValidatorFn, AbstractControl } from "@angular/forms";

export function yearValidator(exp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = exp.test(control.value);

        return forbidden ? { 'forbidden': { value: control.value } } : null;
    };
}