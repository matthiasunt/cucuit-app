import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Cucu} from '../../models/cucu';
import {DbService} from '../../services/db/db.service';
import {isToday} from '../../util/date.util';
import {getEmojiForLang} from '../../util/languages.util';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest} from 'rxjs';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss'],
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;
  time: string;
  at: string;
  day: string;
  imageUrl: string;
  comebackLaterText: string;

  constructor(public dbService: DbService,
              public translate: TranslateService,
              protected gaService: GoogleAnalyticsService,
  ) {
  }

  async ngOnInit() {
    if (this.cucu.avatarId && this.cucu.avatarId.length > 0) {
      this.imageUrl = `${this.dbService.getImageBaseUrl()}/${this.cucu.avatarId}`;
    }
    const date = new Date(this.cucu.startDate);
    this.time = date.toLocaleTimeString(
      [],
      {hour: '2-digit', minute: '2-digit'}
    );

    combineLatest([
      this.translate.get('postCucu.TODAY'),
      this.translate.get('postCucu.TOMORROW'),
      this.translate.get('cucuBox.join.AT'),
    ]).subscribe(([today, tomorrow, at]) => {
      this.day = isToday(date) ? today : tomorrow;
      this.at = at;
    });

    combineLatest(
      [this.translate.get('cucuBox.join.TOOLTIP_COME_BACK_LATER'),
        this.translate.get('cucuBox.join.AT')]).subscribe(([text, at]) => {
      this.comebackLaterText = `${text} ${this.day.toLowerCase()} ${at} ${this.time}`;
    });
  }

  toCall() {
    if (this.isEnabled()) {
      this.gaService.event('to_call', 'cucu_box');
      window.open(this.cucu.inviteUrl);
    }
  }


  isEnabled() {
    const now = new Date();
    // Enable CUCU's 5 mins before they start
    now.setMinutes(now.getMinutes() - 5);
    const startDate = new Date(this.cucu.startDate);
    const endDate = new Date(this.cucu.startDate);
    endDate.setMinutes(endDate.getMinutes() + 15);
    return startDate.toISOString() < now.toISOString()
      && now.toISOString() < endDate.toISOString();
  }

  getTooltipText() {
    return this.isEnabled() ? 'Entra' : this.comebackLaterText;
  }

  getStatus() {
    return this.isEnabled() ? 'primary' : 'disabled';
  }

  getLangEmoji(lang: string) {
    return getEmojiForLang(lang);
  }


}
