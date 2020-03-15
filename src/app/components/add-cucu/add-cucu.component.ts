import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit {

  public form: FormGroup;

  date = '';

  languages = [
    {name: 'Italiano 🇮🇹', short: 'it', emoji: '🇮🇹'},
    {name: 'Español 🇪🇸', short: 'es', emoji: '🇪🇸'},
    {name: 'Deutsch 🇩🇪', short: 'de', emoji: '🇩🇪'},
    {name: 'English 🇬🇧', short: 'en', emoji: '🇬🇧'},
  ];
  timeSlots = this.getTimeSlots();

  constructor(private formBuilder: FormBuilder,
              private translate: TranslateService,
  ) {
  }

  ngOnInit() {

    const now = new Date();
    const currentHour = now.getHours();
    const timePreset = currentHour === 23 ? '00:00' : currentHour + 1 + '00';

    console.log(now.toUTCString());

    this.form = this.formBuilder.group({
      inviteUrl: ['', [Validators.required, validateInviteUrl]],
      topic: ['', Validators.required],
      userName: ['', Validators.required],
      language: [this.translate.currentLang, Validators.required],
      day: ['Today', Validators.required],
      time: [timePreset, Validators.required],
    });
  }

  public postCucu() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    } else {
      console.error('Form invalid');
      console.log(this.form.getRawValue());
    }
  }

  get inviteUrl() {
    return this.form.get('inviteUrl') as FormControl;
  }

  get topic() {
    return this.form.get('topic') as FormControl;
  }

  get userName() {
    return this.form.get('userName') as FormControl;
  }

  get language() {
    return this.form.get('language') as FormControl;
  }

  get day() {
    return this.form.get('day') as FormControl;
  }

  get time() {
    return this.form.get('time') as FormControl;
  }

  handleDateChange(event) {
    console.log(event);
  }

  private getTimeSlots() {
    const timeSlots = [];
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
      timeSlots.push(slot);
    }
    return timeSlots;
  }

}

export function validateInviteUrl(control: AbstractControl) {
  if (control.value.includes('hangouts.google.com') || control.value.includes('join.skype.com')) {
    return {validInviteUrl: true};
  }
  return null;
}


