import {AbstractControl} from '@angular/forms';

export const validateInviteUrl = (control: AbstractControl) => {
  if (control && control.value && !control.value.includes('google.com')
    && !control.value.includes('join.skype.com')
    && !control.value.includes('meet.jit.si')
    && !control.value.includes('zoom.us')) {
    return {validInviteUrl: false};
  }
  return null;
};
