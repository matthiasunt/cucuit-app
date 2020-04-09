import {Component, Input, OnInit} from '@angular/core';
import {Cucu} from '../../models/cucu';
import {DbService} from '../../services/db/db.service';
import {isToday} from '../../util/date.util';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest} from 'rxjs';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import ICalendar from 'datebook';

@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss'],
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;
  @Input() isPast = false;

  timeLabel: string;
  imageUrl: string;
  comebackLaterText: string;
  buttonLabel: string;

  constructor(public dbService: DbService,
              public translate: TranslateService,
              protected gaService: GoogleAnalyticsService,
  ) {
  }

  async ngOnInit() {
    if (this.cucu.avatarId && this.cucu.avatarId.length > 0) {
      this.imageUrl = `${this.dbService.getImageBaseUrl()}/${this.cucu.avatarId}`;
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
        this.translate.get('postCucu.TOMORROW'),
        this.translate.get('cucuBox.join.AT'),
        this.translate.get('cucuBox.join.LABEL'),
        this.translate.get('cucuBox.join.TOOLTIP_COME_BACK_LATER')
      ]).subscribe(([today, tomorrow, at, enter, text]) => {
        this.buttonLabel = enter;
        this.timeLabel = isToday(cucuStartDate) ? `${today} ${at} ${time}` : `${cucuStartDate.toLocaleDateString()}, ${time}`;
        // this.comebackLaterText = `${text} ${day.toLowerCase()} ${at} ${time}`;
      });
    } else {
      // Cucu in the past
      this.timeLabel = `${cucuStartDate.toLocaleDateString()}, ${time}`;
      this.buttonLabel = 'Concluso';
    }
  }


  isEnabled() {
    const now = new Date();
    const startDate = new Date(this.cucu.startDate);
    startDate.setMinutes(startDate.getMinutes() - 5);
    const endDate = new Date(this.cucu.startDate);
    endDate.setMinutes(endDate.getMinutes() + 90);
    return now.toISOString() > startDate.toISOString()
      && now.toISOString() < endDate.toISOString();
  }

  toCall() {
    if (this.isEnabled()) {
      this.gaService.event('to_call', 'cucu_box');
      window.open(this.cucu.inviteUrl);
    }
  }

  public calendarClicked() {
    const endDate = new Date(this.cucu.startDate)
      .setHours(new Date(this.cucu.startDate).getHours() + 1);
    const icalEvent = new ICalendar({
      title: this.cucu.topic,
      description: this.cucu.description,
      start: this.cucu.startDate,
      end: endDate
    });
    icalEvent.download();
  }

  public shareClicked() {

  }

}
