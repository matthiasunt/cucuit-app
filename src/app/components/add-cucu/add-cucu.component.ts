import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DbService} from '../../services/db/db.service';
import {addDays} from '../../util/date.util';
import {NbComponentShape, NbComponentSize, NbToastrService} from '@nebular/theme';
import {getLangs} from '../../util/languages.util';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

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
              public translate: TranslateService,
              private dbService: DbService,
              private toastrService: NbToastrService,
              protected gaService: GoogleAnalyticsService,
  ) {
  }

  ngOnInit() {
    const now = new Date();
    const currentHour = now.getHours();
    const dayPreset = currentHour > 18 ? 'tomorrow' : 'today';
    const timePreset = currentHour > 18 || currentHour < 8 ?
      '10:00' : `${currentHour + 2}:00`;

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
      if (change === 'tomorrow') {
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

      if (data.day === 'tomorrow') {
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
      this.dbService.createCucu(cucu).subscribe(async (res: any) => {
        if (res.topic) {
          this.avatarUploadLabel = '';
          this.form.reset();
          await this.showToast('success');
        } else {
          console.error(res);
          await this.showToast('danger');
        }
      });
    } else {
      console.error('Form invalid');
      console.error(this.form);
      console.log(this.form.getRawValue());
    }
  }

  public onAvatarFileChanged(event) {
    this.avatarUploadLabel = '';
    const file: File = event.target.files[0];
    if (file && file.name) {
      this.avatarUploadLabel = file.name;
      this.dbService.uploadAvatar(file).subscribe(async (res: any) => {
        console.log(res);
        if (res.id) {
          this.avatarId = res.id;
        }
      }, async error => {
        if (error.status === 413) {
          console.log('Too large');
          this.avatarUploadLabel = 'File troppo grande';
          this.toastrService.show(
            'Immagine troppo grande. Il massimo é 1MB.',
            await this.translate.get('postCucu.CUCU_ERROR').toPromise(),
            {status: 'warning'});
        } else {
          this.avatarUploadLabel = 'Errore';
          this.toastrService.show(
            'Errore durante l\'upload del tuo immagine.',
            await this.translate.get('postCucu.CUCU_ERROR').toPromise(),
            {status: 'warning'});
        }
      });
    }
  }

  private async showToast(status) {
    const title = status === 'success' ?
      await this.translate.get('SUCCESS').toPromise() :
      await this.translate.get('ERROR').toPromise();

    const message = status === 'success' ?
      await this.translate.get('postCucu.CUCU_POSTED').toPromise() :
      await this.translate.get('postCucu.CUCU_ERROR').toPromise();
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

    if (day !== 'today') {
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


