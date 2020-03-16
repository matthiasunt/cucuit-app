import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DbService} from '../../services/db/db.service';
import {addDays} from '../../util/date.util';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit, AfterViewInit {

  @ViewChild('inviteUrlInput') inviteUrlInput: ElementRef;


  public form: FormGroup;
  filteredControlOptions$: Observable<string[]>;

  languages = [
    {name: 'Italiano 🇮🇹', short: 'it', emoji: '🇮🇹'},
    {name: 'Español 🇪🇸', short: 'es', emoji: '🇪🇸'},
    {name: 'Deutsch 🇩🇪', short: 'de', emoji: '🇩🇪'},
    {name: 'English 🇬🇧', short: 'en', emoji: '🇬🇧'},
  ];
  timeSlots = this.getTimeSlots();

  avatarUploadLabel = '';

  avatarId: string;

  constructor(private formBuilder: FormBuilder,
              private translate: TranslateService,
              private dbService: DbService,
  ) {
  }

  ngOnInit() {
    const now = new Date();
    const currentHour = now.getHours();
    this.form = this.formBuilder.group({
      inviteUrl: ['https://hangouts.google.com/call/A6PK6lK45zkCf357wj-vAEEI', [Validators.required, validateInviteUrl]],
      topic: ['Lettura di libri in compagnia con un bel bicchiere di vino.', Validators.required],
      userName: ['Dario', Validators.required],
      language: [this.translate.currentLang, Validators.required],
      day: ['Tomorrow', Validators.required],
      time: ['18:00', Validators.required],
    });

    this.filteredControlOptions$ = of(this.timeSlots);
    this.filteredControlOptions$ = this.time.valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );
  }

  ngAfterViewInit() {
    // this.inviteUrlInput.nativeElement.focus();
  }

  public postCucu() {
    if (this.form.valid && this.avatarId) {

      const data = this.form.getRawValue();
      let date = new Date();
      if (data.day === 'Tomorrow') {
        date = addDays(1)(date);
      }

      const hours = data.time.split(':')[0];
      const minutes = data.time.split(':')[1];
      console.log(hours, minutes);
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      console.log(date);
      const cucu = {
        inviteUrl: data.inviteUrl,
        topic: data.topic,
        startDateString: date.toUTCString(),
        userName: data.userName,
        avatarId: this.avatarId,
        language: data.language
      };
      this.dbService.createCucu(cucu).subscribe((res) => {
        console.log(res);
      });

      // TODO: Step 1 - Upload Image
      // TODO: Step 2 - Upload Cucu
    } else {
      console.error('Form invalid');
      console.error(this.form);
      console.log(this.form.getRawValue());
    }
  }

  public onAvatarFileChanged(event) {
    const file: File = event.target.files[0];
    if (file && file.name) {
      this.avatarUploadLabel = file.name;
      this.dbService.uploadAvatar(file).subscribe((res: any) => {
        if (res.id) {
          this.avatarId = res.id;
        }
      });
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

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.timeSlots.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  handleDateChange(event) {
    console.log(event);
  }

  private getTimeSlots() {
    const timeSlots = [];
    for (let i = 0; i < 48; i++) {
      let slot = Math.floor(i / 2) + ':';
      // if (slot.length < 3) {
      //   slot = '0' + slot;
      // }
      if (i % 2 === 0) {
        slot += '00';
      } else {
        slot += '30';
      }
      timeSlots.push(slot);
    }
    return timeSlots;
  }

  public elementStatus(control: FormControl) {
    return control.valid || !control.dirty ? '' : 'warning';
  }

}

export function validateInviteUrl(control: AbstractControl) {
  if (!control.value.includes('hangouts.google.com') && !control.value.includes('join.skype.com')) {
    return {validInviteUrl: false};
  }
  return null;
}


