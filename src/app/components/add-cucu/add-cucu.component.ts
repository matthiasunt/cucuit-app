import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DbService} from '../../services/db/db.service';
import {addDays} from '../../util/date.util';
import {NbComponentShape, NbComponentSize, NbToastrService} from '@nebular/theme';
import {getLangs} from '../../util/languages.util';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit, AfterViewInit {

  @ViewChild('element') element: ElementRef;

  componentSize: NbComponentSize = 'medium';
  componentShape: NbComponentShape = 'rectangle';
  showCallProvidersInfoBox = true;

  public form: FormGroup;
  filteredTimeOptions$: Observable<string[]>;

  languages = getLangs();

  timeSlots = [];

  avatarUploadLabel = '';

  avatarId: string;

  constructor(private formBuilder: FormBuilder,
              private translate: TranslateService,
              private dbService: DbService,
              private toastrService: NbToastrService,
  ) {
  }

  ngOnInit() {
    const now = new Date();
    const currentHour = now.getHours();
    const dayPreset = currentHour > 18 ? 'Tomorrow' : 'Today';
    const timePreset = currentHour > 18 ? '10:00' : `${currentHour + 2}:00`;

    this.timeSlots = this.getTimeSlots(dayPreset);
    this.form = this.formBuilder.group({
      // inviteUrl: ['https://hangouts.google.com/call/A6PK6lK45zkCf357wj-vAEEI', [Validators.required, validateInviteUrl]],
      // topic: ['Lettura di libri in compagnia con un bel bicchiere di vino.', Validators.required],
      // userName: ['Dario', Validators.required],
      // language: ['it', Validators.required],
      // day: [dayPreset, Validators.required],
      // time: [timePreset, Validators.required],
      inviteUrl: ['', [Validators.required, validateInviteUrl]],
      topic: ['', Validators.required],
      userName: ['', Validators.required],
      language: [this.translate.currentLang, Validators.required],
      day: [dayPreset, Validators.required],
      time: [timePreset, Validators.required],
    });

    this.filteredTimeOptions$ = of(this.timeSlots);
    this.filteredTimeOptions$ = this.time.valueChanges
      .pipe(startWith(''), map(filterString => this.filterTimeslots(filterString)));

    this.day.valueChanges.subscribe((change) => {
      this.timeSlots = this.getTimeSlots(change);
      if (change === 'Tomorrow') {
        this.time.setValue('10:00');
      } else {
        this.time.setValue(`${currentHour + 2}:00`);
      }
    });
  }

  private filterTimeslots(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.timeSlots.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.element.nativeElement.blur();
      this.time.markAsUntouched();
    }, 1);
  }

  public postCucu() {
    if (this.form.valid) {

      const data = this.form.getRawValue();
      let date = new Date();

      if (data.day === 'Tomorrow') {
        date = addDays(1)(date);
        console.log(date);
      }

      const hours = data.time.split(':')[0];
      const minutes = data.time.split(':')[1];
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      console.log(date);
      if (!this.avatarId) {
        this.avatarId = '';
      }
      const cucu = {
        inviteUrl: data.inviteUrl,
        topic: data.topic,
        startDate: date,
        userName: data.userName,
        avatarId: this.avatarId,
        language: data.language
      };
      this.dbService.createCucu(cucu).subscribe((res: any) => {
        if (res.topic) {
          this.avatarUploadLabel = '';
          this.form.reset();
          this.showToast('success');
        } else {
          console.error(res);
          this.showToast('danger');
        }
      });
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

  private showToast(status) {
    const title = status === 'success' ? 'Success' : 'Error';
    const message = status === 'success' ? 'Cucu posted!' : 'Error. Please try again later';
    this.toastrService.show(
      message,
      title,
      {status});
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

  private getTimeSlots(day: string) {
    const timeSlots = [];
    let currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    let offset = currentMinutes > 30 ? 1 : 0;

    if (day !== 'Today') {
      currentHour = 0;
      offset = 0;
    }
    for (let i = currentHour + offset; i < 24; i++) {
      const slot = Math.floor(i) + ':';
      timeSlots.push(slot + '00', slot + '30');
    }
    return timeSlots;
  }

  public elementStatus(control: FormControl) {
    return control.valid || !control.dirty ? '' : 'danger';
  }
}

export function validateInviteUrl(control: AbstractControl) {
  if (control && control.value && !control.value.includes('hangouts.google.com')
    && !control.value.includes('join.skype.com')
    && !control.value.includes('meet.jit.si')
    && !control.value.includes('zoom.us')) {
    return {validInviteUrl: false};
  }
  return null;
}


