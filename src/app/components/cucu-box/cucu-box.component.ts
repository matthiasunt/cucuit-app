import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Cucu} from '../../models/cucu';
import {DbService} from '../../services/db/db.service';
import {isToday} from '../../util/date.util';
import {getEmojiForLang} from '../../util/languages.util';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest} from 'rxjs';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss']
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;
  time: string;
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
      this.translate.get('postCucu.TOMORROW')
    ]).subscribe(([today, tomorrow]) => {
      this.day = isToday(date) ? today : tomorrow;
    });

    combineLatest(
      [this.translate.get('cucuBox.join.TOOLTIP_COME_BACK_LATER'),
        this.translate.get('cucuBox.join.AT')]).subscribe(([text, at]) => {
      this.comebackLaterText = `${text} ${this.day.toLowerCase()} ${at} ${this.time}`;
    });
  }

  getLangEmoji(lang: string) {
    return getEmojiForLang(lang);
  }

  isEnabled() {
    const now = new Date();
    const startDate = new Date(this.cucu.startDate);
    const endDate = new Date(this.cucu.startDate);
    endDate.setMinutes(endDate.getMinutes() + 15);
    return startDate.toISOString() < now.toISOString()
      && now.toISOString() < endDate.toISOString();
  }

  getTooltipText() {
    return this.isEnabled() ? '' : this.comebackLaterText;
  }

  getStatus() {
    return this.isEnabled() ? 'primary' : 'disabled';
  }

  toCall() {
    if (this.isEnabled()) {
      window.open(this.cucu.inviteUrl);
    }
  }


}
