import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest, Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DbService} from '../../services/db/db.service';
import {getTimeSlots, isToday} from '../../util/date.util';
import {NbComponentShape, NbComponentSize, NbDialogService, NbToastrService, NbWindowService} from '@nebular/theme';
import {getAllLangs, getLangName} from '../../util/languages.util';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {validateInviteUrl} from '../../util/validators.util';
import {Cucu} from '../../models/cucu';
import {CucuDetailComponent} from '../cucu-detail/cucu-detail.component';
import {PostSuccessComponent} from './post-success/post-success.component';
import {ThemeService} from '../../services/theme/theme.service';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit {

  @ViewChild('inviteUrlInputElement') inviteUrlInputElement: ElementRef;
  @ViewChild('timeInputElement') timeInputElement: ElementRef;

  public form: FormGroup;

  public callServices: { name: string, tooltip: string, imageUrl: string }[] = [];

  filteredTimeOptions$: Observable<string[]>;
  timeSlots = [];

  filteredLanguageOptions$: Observable<string[]>;
  languages: string[] = getAllLangs().map(e => e.name);


  avatarUploadLabel = '';
  avatarId: string;


  constructor(private formBuilder: FormBuilder,
              public themeService: ThemeService,
              public translate: TranslateService,
              private dbService: DbService,
              private dialogService: NbDialogService,
              private toastrService: NbToastrService,
              protected gaService: GoogleAnalyticsService,
  ) {
  }

  ngOnInit() {
    this.initForm();
    combineLatest([
      this.translate.get('postCucu.inviteUrl.PARTICIPANTS'),
      this.translate.get('postCucu.inviteUrl.MINUTES'),
    ]).subscribe(([p, m]) => {
      this.callServices = [
        {
          name: 'Google Hangouts',
          tooltip: `Google Hangouts: 10 ${p}`,
          imageUrl: './assets/images/hangouts.svg',
        },
        {
          name: 'Skype',
          tooltip: `Skype: 50 ${p}`,
          imageUrl: './assets/images/skype.svg',
        },
        {
          name: 'Zoom',
          tooltip: `Zoom: 100 ${p}, max. 40 ${m}`,
          imageUrl: './assets/images/hangouts.svg',
        },
        {
          name: 'Jitsi Meet',
          tooltip: `Jitsi Meet: 25 ${p}`,
          imageUrl: './assets/images/jitsi.png',
        }
      ];
    });
  }


  public postCucu() {
    if (this.form.valid) {
      const data = this.form.getRawValue();

      const date = data.date;
      const hours = data.time.split(':')[0];
      const minutes = data.time.split(':')[1];
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      if (!this.avatarId) {
        this.avatarId = '';
      }
      const type = this.isConference ? 'conference' : 'chit_chat';
      const cucu: Cucu = {
        inviteUrl: data.inviteUrl,
        topic: data.topic,
        description: data.description,
        type,
        startDate: date,
        userName: data.userName,
        avatarId: this.avatarId,
        language: data.language
      };
      this.dbService.createCucu(cucu).subscribe(async (res: any) => {
        if (res.topic) {
          this.avatarUploadLabel = '';
          this.initForm();
          this.gaService.event('post_success', 'post_cucu');
          const cucuId: string = res._id;
          this.dialogService.open(PostSuccessComponent, {context: {cucu: res}})
            .onClose.subscribe(() => {
            this.inviteUrlInputElement.nativeElement.focus();
          });
        } else {
          console.error(res);
        }
        this.inviteUrlInputElement.nativeElement.focus();
      }, async err => {
        console.error(err);
        await this.showCucuPostError();
        this.gaService.event('post_failed', 'post_cucu');
      });
    } else {
      console.error('Form invalid');
      console.log(this.form.getRawValue());
    }
  }

  public onAvatarFileChanged(event) {
    this.avatarUploadLabel = '';
    const file: File = event.target.files[0];
    if (file && file.name) {
      this.avatarUploadLabel = file.name;

      // Upload Avatar
      this.dbService.uploadAvatar(file).subscribe(async (res: any) => {
        // Successful
        if (res.id) {
          this.avatarId = res.id;
          this.gaService.event('image_upload_success', 'post_cucu');
        }
        // Error
      }, async err => {
        if (err.status === 413) {
          this.avatarUploadLabel = await this.translate.get('postCucu.errors.fileTooLarge.TITLE').toPromise();
          this.toastrService.show(
            await this.translate.get('postCucu.errors.fileTooLarge.TEXT').toPromise(),
            await this.translate.get('postCucu.CUCU_ERROR').toPromise(),
            {status: 'warning'});
          this.gaService.event('image_too_large', 'post_cucu');
        } else {
          this.avatarUploadLabel = await this.translate.get('postCucu.errors.unknown.TITLE').toPromise();
          this.toastrService.show(
            await this.translate.get('postCucu.errors.unknown.TEXT').toPromise(),
            await this.translate.get('postCucu.CUCU_ERROR').toPromise(),
            {status: 'warning'});
          this.gaService.event('image_upload_failed', 'post_cucu');
        }
      });
    }
  }

  private initForm() {
    const d = new Date();
    const tomorrow = new Date(d.setDate(d.getDate() + 1));
    const currentHour = new Date().getHours();
    const datePreset = currentHour > 18 ? tomorrow : new Date();

    const timePreset = currentHour > 18 || currentHour < 8 ?
      '10:00' : `${currentHour + 2}:00`;
    const langPreset = getLangName(this.translate.currentLang);
    this.timeSlots = getTimeSlots(datePreset);
    this.form = this.formBuilder.group({
      inviteUrl: ['https://hangouts.google.com/call/3wTZG0Tv8yykGbUGSfj2AEEI', [Validators.required, validateInviteUrl]],
      topic: ['Sports', Validators.required],
      description: ['Morning routine', Validators.required],
      isConference: [false, Validators.required],
      userName: ['Matthias', Validators.required],
      language: [langPreset, Validators.required],
      date: [datePreset, Validators.required],
      time: [timePreset, [Validators.required, Validators.pattern('[0-9]?[0-9]:[0-9][0-9]')]],
      // inviteUrl: ['', [Validators.required, validateInviteUrl]],
      // topic: ['', Validators.required],
      // description: ['', Validators.required],
      // isConference: [false, Validators.required],
      // userName: ['', Validators.required],
      // language: [langPreset, Validators.required],
      // date: [datePreset, Validators.required],
      // time: [timePreset, [Validators.required, Validators.pattern('[0-9]?[0-9]:[0-9][0-9]')]],
    });

    this.filteredTimeOptions$ = of(this.timeSlots);
    this.filteredTimeOptions$ = this.time.valueChanges
      .pipe(map(filterString => this.filterTimeslots(filterString)));

    this.filteredLanguageOptions$ = of(this.languages);
    this.filteredLanguageOptions$ = this.language.valueChanges
      .pipe(map(filterString => this.filterLanguages(filterString)));


    this.date.valueChanges.subscribe((change) => {
      this.timeSlots = getTimeSlots(change);
      if (!isToday(change)) {
        this.time.setValue('10:00');
      } else {
        this.time.setValue(`${currentHour + 2}:00`);
      }
    });

    this.translate.onLangChange.subscribe(() => {
      this.language.setValue(getLangName(this.translate.currentLang));
    });
    setTimeout(() => {
      this.inviteUrlInputElement.nativeElement.focus();
    }, 1);
  }

  private filterTimeslots(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.timeSlots.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
  }

  private filterLanguages(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.languages.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
  }

  private async showCucuPostError() {
    const title = await this.translate.get('ERROR').toPromise();
    const message = this.translate.get('postCucu.CUCU_ERROR').toPromise();
    this.toastrService.show(
      message,
      title,
      {status: 'danger'});

  }

  get inviteUrl() {
    return this.form.get('inviteUrl') as FormControl;
  }

  get topic() {
    return this.form.get('topic') as FormControl;
  }

  get description() {
    return this.form.get('description') as FormControl;
  }

  get isConference() {
    return this.form.get('isConference') as FormControl;
  }

  get userName() {
    return this.form.get('userName') as FormControl;
  }

  get language() {
    return this.form.get('language') as FormControl;
  }

  get date() {
    return this.form.get('date') as FormControl;
  }

  get time() {
    return this.form.get('time') as FormControl;
  }
}


