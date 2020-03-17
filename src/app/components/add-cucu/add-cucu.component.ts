import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DbService} from '../../services/db/db.service';
import {addDays} from '../../util/date.util';
import {NbComponentShape, NbComponentSize, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit, AfterViewInit {

  @ViewChild('inviteUrlInput') inviteUrlInput: ElementRef;

  componentSize: NbComponentSize = 'medium';
  componentShape: NbComponentShape = 'rectangle';

  public form: FormGroup;
  filteredTimeOptions$: Observable<string[]>;
  filteredParticipantsOptions$: Observable<string[]>;

  languages = [
    {name: 'Italiano 🇮🇹', short: 'it', emoji: '🇮🇹'},
    {name: 'Español 🇪🇸', short: 'es', emoji: '🇪🇸'},
    {name: 'Deutsch 🇩🇪', short: 'de', emoji: '🇩🇪'},
    {name: 'English 🇬🇧', short: 'en', emoji: '🇬🇧'},
  ];

  participantsOptions = ['10', '20', '50'];

  timeSlots = this.getTimeSlots();

  avatarUploadLabel = '';

  avatarId: string;

  constructor(private formBuilder: FormBuilder,
              private translate: TranslateService,
              private dbService: DbService,
              // private toastrService: NbToastrService,
  ) {
  }

  ngOnInit() {
    const now = new Date();
    const currentHour = now.getHours();
    this.form = this.formBuilder.group({
      // inviteUrl: ['https://hangouts.google.com/call/A6PK6lK45zkCf357wj-vAEEI', [Validators.required, validateInviteUrl]],
      // topic: ['Lettura di libri in compagnia con un bel bicchiere di vino.', Validators.required],
      // userName: ['Dario', Validators.required],
      // language: ['it', Validators.required],
      // participantsLimit: ['10', Validators.required],
      // day: ['Tomorrow', Validators.required],
      // time: ['18:00', Validators.required],
      inviteUrl: ['', [Validators.required, validateInviteUrl]],
      topic: ['', Validators.required],
      userName: ['', Validators.required],
      language: [this.translate.currentLang, Validators.required],
      participantsLimit: ['', Validators.required],
      day: ['Tomorrow', Validators.required],
      time: ['', Validators.required],
    });

    this.filteredTimeOptions$ = of(this.timeSlots);
    this.filteredTimeOptions$ = this.time.valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filterTimeslots(filterString)),
      );
    this.filteredParticipantsOptions$ = of(this.participantsOptions);
    this.filteredParticipantsOptions$ = this.participantsLimit.valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filterParticipantsLimit(filterString)),
      );
  }

  private filterTimeslots(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.timeSlots.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
  }

  private filterParticipantsLimit(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.participantsOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
  }

  ngAfterViewInit() {
    // this.inviteUrlInput.nativeElement.focus();
  }

  public postCucu() {
    if (this.form.valid) {

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
      if (!this.avatarId) {
        this.avatarId = '';
      }
      const cucu = {
        inviteUrl: data.inviteUrl,
        topic: data.topic,
        startDateString: date.toUTCString(),
        userName: data.userName,
        avatarId: this.avatarId,
        language: data.language
      };
      this.dbService.createCucu(cucu).subscribe((res: any) => {
        if (res.topic) {
          this.avatarUploadLabel = '';
          this.form.reset();
          // this.showToast('success');
        } else {
          console.error(res);
          // this.showToast('danger');
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
    // const title = status === 'success' ? 'Success' : 'Error';
    // const message = status === 'success' ? 'Cucu posted!' : 'Error. Please try again later';
    // this.toastrService.show(
    //   message,
    //   title,
    //   {status});
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

  get participantsLimit() {
    return this.form.get('participantsLimit') as FormControl;
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
    return control.valid || !control.dirty ? '' : 'danger';
  }

}

export function validateInviteUrl(control: AbstractControl) {
  if (control && control.value && !control.value.includes('hangouts.google.com')
    && !control.value.includes('join.skype.com')
    && !control.value.includes('zoom.us')) {
    return {validInviteUrl: false};
  }
  return null;
}


