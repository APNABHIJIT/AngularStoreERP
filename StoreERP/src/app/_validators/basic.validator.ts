import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Basic {
    static isRequired(control: AbstractControl): ValidationErrors | null {
        if (control.value == null || control.value == "" || control.value == undefined)
            return { isRequired: true }
        else if (control.value)
            if (typeof control.value == 'string' && control.value.trim() == "") return { isRequired: true }
            return null;
    }

    static validPinCode(control: AbstractControl): ValidationErrors | null {
        let regex: RegExp = new RegExp(/^\d{6}$/);
       
        if (control.value && !control.value.match(regex)){
            return { invalidPin: true }
        }
        return null;
    }

    static validPanNo(control: AbstractControl): ValidationErrors | null {
        let regex: RegExp = new RegExp(/[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/);
       
        if (control.value && !control.value.match(regex)){
            return { invalidPANNo: true }
        }
        return null;
    }

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return null;
          }
      
          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);
      
          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? null : error;
        };
      }

      static genricPatternValidator(regex: RegExp, control: AbstractControl): ValidationErrors | null {
        if (control.value && !control.value.match(regex)){
            return { hasNumber: true }
        }
        return null;
    }

      static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('newPwd').value; // get password from our password form control
        const confirmPassword: string = control.get('retypePwd').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
          // if they don't match, set an error in our confirmPassword form control
          control.get('retypePwd').setErrors({ NoPassswordMatch: true });
        }
      }

      static passwordMatchValidator1(control: AbstractControl) {
        const password: string = control.get('currentPwd').value; // get password from our password form control
        const confirmPassword: string = control.get('newPwd').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password == confirmPassword) {
          // if they don't match, set an error in our confirmPassword form control
          control.get('newPwd').setErrors({ NoPassswordMatch: true });
        }
      }

      static validEmail(control: AbstractControl): ValidationErrors | null {
        let regex: RegExp = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
       
        if (control.value && !control.value.match(regex)){
            return { invalidEmail: true }
        }
        return null;
    }
}