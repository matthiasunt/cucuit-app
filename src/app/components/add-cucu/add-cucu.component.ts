import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DbService} from '../../services/db/db.service';
import {addDays, getTimeSlots} from '../../util/date.util';
import {NbComponentShape, NbComponentSize, NbToastrService} from '@nebular/theme';
import {getLangs} from '../../util/languages.util';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {validateInviteUrl} from '../../util/validators.util';
import {Cucu} from '../../models/cucu';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit {

  @ViewChild('inviteUrlInputElement') inviteUrlInputElement: ElementRef;
  @ViewChild('timeInputElement') timeInputElement: ElementRef;
  public form: FormGroup;

  componentSize: NbComponentSize = 'medium';
  componentShape: NbComponentShape = 'rectangle';
  showCallProvidersInfoBox = true;
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
    this.initForm();
  }

  public postCucu() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      let date = new Date();

      if (data.day === 'tomorrow') {
        date = addDays(1)(date);
      }

      const hours = data.time.split(':')[0];
      const minutes = data.time.split(':')[1];
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      if (!this.avatarId) {
        this.avatarId = '';
      }
      const cucu: Cucu = {
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
          this.initForm();
          await this.showToast('success');
          this.gaService.event('post_success', 'post_cucu');
        } else {
          console.error(res);
        }
        this.inviteUrlInputElement.nativeElement.focus();
      }, async err => {
        console.error(err);
        await this.showToast('danger');
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
    const now = new Date();
    const currentHour = new Date().getHours();
    const dayPreset = currentHour > 18 ? 'tomorrow' : 'today';
    const timePreset = currentHour > 18 || currentHour < 8 ?
      '10:00' : `${currentHour + 2}:00`;
    this.timeSlots = getTimeSlots(dayPreset);
    this.form = this.formBuilder.group({
      inviteUrl: ['', [Validators.required, validateInviteUrl]],
      topic: ['', Validators.required],
      userName: ['', Validators.required],
      language: [this.translate.currentLang, Validators.required],
      day: [dayPreset, Validators.required],
      time: [timePreset, [Validators.required, Validators.pattern('[0-9]?[0-9]:[0-9][0-9]')]],
    });

    this.filteredTimeOptions$ = of(this.timeSlots);
    this.filteredTimeOptions$ = this.time.valueChanges
      .pipe(map(filterString => this.filterTimeslots(filterString)));

    this.day.valueChanges.subscribe((change) => {
      this.timeSlots = getTimeSlots(change);
      if (change === 'tomorrow') {
        this.time.setValue('10:00');
      } else {
        this.time.setValue(`${currentHour + 2}:00`);
      }
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
}


