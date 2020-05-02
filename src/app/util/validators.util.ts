import {AbstractControl} from '@angular/forms';

export const validateInviteUrl = (control: AbstractControl) => {
  if (control && control.value && !control.value.includes('google')
    && !control.value.includes('skype')
    && !control.value.includes('jit')
    && !control.value.includes('zoom')) {
    return {validInviteUrl: false};
  }
  return null;
};
