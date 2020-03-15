import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit {

  private form: FormGroup = this.formBuilder.group({
    quantity: [1, Validators.required],
    email: ['', [Validators.required]],
    agreeWithPrivacyPolicy: [false, Validators.requiredTrue],
  });

  date = '';

  timeSlots = [];

  constructor(private formBuilder: FormBuilder) {
    for (let i = 0; i < 48; i++) {
      let slot = Math.floor(i / 2) + ':';
      if (slot.length < 3) {
        slot = '0' + slot;
      }
      if (i % 2 === 0) {
        slot += '00';
      } else {
        slot += '30';
      }
      this.timeSlots.push(slot);
    }
  }

  ngOnInit() {
  }

  handleDateChange(event) {
    console.log(event);
  }

}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
