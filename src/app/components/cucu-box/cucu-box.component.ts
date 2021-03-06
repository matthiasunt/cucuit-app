import {Component, Input, OnInit} from '@angular/core';
import {Cucu} from '../../models/cucu';
import {DbService} from '../../services/db/db.service';
import {isToday} from '../../util/date.util';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest} from 'rxjs';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {NbDialogService} from '@nebular/theme';
import {Router} from '@angular/router';
import Calendars from 'datebook/src/utils/calendars.js';
import {CucuIsOpenPipe} from '../../pipes/cucu-is-open/cucu-is-open.pipe';
import {GetCucuUrlPipe} from '../../pipes/get-cucu-url/get-cucu-url.pipe';
import {ShareLinkComponent} from './share-link/share-link.component';
import {CallProvidersService} from '../../services/call-providers/call-providers.service';


@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss'],
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;
  @Input() isPast = false;
  shareAvailable = false;
  timeLabel: string;
  imageUrl: string;
  buttonLabel: string;

  constructor(public dbService: DbService,
              public translate: TranslateService,
              private router: Router,
              public callProvidersService: CallProvidersService,
              private dialogService: NbDialogService,
              private getCucuUrlPipe: GetCucuUrlPipe,
              private cucuIsOpen: CucuIsOpenPipe,
              protected gaService: GoogleAnalyticsService,
  ) {
  }

  async ngOnInit() {
    if (this.cucu) {
      if (this.cucu.avatarId && this.cucu.avatarId.length > 0) {
        if (this.dbService.mockServer) {
          this.imageUrl = `./assets/images/avatars/${this.cucu.avatarId}.jpg`;
        } else {
          this.imageUrl = `${this.dbService.getImageBaseUrl()}/${this.cucu.avatarId}`;
        }
      }
      const cucuStartDate = new Date(this.cucu.startDate);
      const time = cucuStartDate.toLocaleTimeString(
        [],
        {hour: '2-digit', minute: '2-digit'}
      );

      // Cucu coming up
      if (!this.isPast) {
        combineLatest([
          this.translate.get('postCucu.TODAY'),
          this.translate.get('cucuBox.join.AT'),
          this.translate.get('cucuBox.join.TOOLTIP_COME_BACK_LATER')
        ]).subscribe(([today, at, text]) => {
          // TODO: Refine tooltip
          this.timeLabel = isToday(cucuStartDate) ? `${today} ${at} ${time}` : `${cucuStartDate.toLocaleDateString()}, ${time}`;
        });
      } else {
        // Cucu in the past
        this.timeLabel = `${cucuStartDate.toLocaleDateString()}, ${time}`;
      }
    }
    // @ts-ignore
    if (navigator.share) {
      this.shareAvailable = true;
    }
  }


  toCall(event) {
    event.stopPropagation();
    if (this.cucu && this.cucuIsOpen.transform(this.cucu.startDate)) {
      this.gaService.event('to_call', 'cucu_box');
      this.dbService.cucuClicked(this.cucu._id);
      window.open(this.cucu.inviteUrl);
    }
  }

  disabledJoinClicked(event) {
    event.stopPropagation();
  }

  toDetail(event) {
    event.stopPropagation();
    this.router.navigateByUrl(`cucus/${this.cucu._id}`);
  }

  public calendarClicked(event) {
    event.stopPropagation();
    const endDate = new Date(this.cucu.startDate)
      .setHours(new Date(this.cucu.startDate).getHours() + 1);

    const callEvent = {
      title: `CUCUit - ${this.cucu.topic}`,
      description: `${this.cucu.description}\n ${this.getCucuUrlPipe.transform(this.cucu._id)}`,
      start: this.cucu.startDate,
      end: endDate
    };
    Calendars.downloadIcs(callEvent);
  }

  public shareClicked(event) {
    event.stopPropagation();
    if (this.shareAvailable) {
      const shareData = {
        title: 'CUCUit',
        text: '',
        url: this.getCucuUrlPipe.transform(this.cucu._id),
      };
      // @ts-ignore
      navigator.share(shareData);
    } else {
      this.dialogService.open(ShareLinkComponent, {context: {cucu: this.cucu}});
    }
  }

}
