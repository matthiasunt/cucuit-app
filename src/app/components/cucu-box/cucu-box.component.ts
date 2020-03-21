import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Cucu} from '../../models/cucu';
import {DbService} from '../../services/db/db.service';
import {isToday} from '../../util/date.util';
import {getEmojiForLang} from '../../util/languages.util';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest, forkJoin} from 'rxjs';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss'],
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;
  @Input() isPast = false;

  timeLabel: string;
  time: string;
  at: string;
  day: string;
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

    if (!this.isPast) {
      combineLatest([
        this.translate.get('postCucu.TODAY'),
        this.translate.get('postCucu.TOMORROW'),
        this.translate.get('cucuBox.join.AT'),
        this.translate.get('cucuBox.join.LABEL'),
        this.translate.get('cucuBox.join.TOOLTIP_COME_BACK_LATER')
      ]).subscribe(([today, tomorrow, at, enter, text]) => {
        const day = isToday(cucuStartDate) ? today : tomorrow;
        this.buttonLabel = enter;
        this.timeLabel = `${day} ${at} ${time}`;
        this.comebackLaterText = `${text} ${day.toLowerCase()} ${at} ${time}`;
      });
    } else {
      this.timeLabel = `${cucuStartDate.toLocaleDateString()}, ${time}`;
      this.buttonLabel = 'Concluso';
    }
  }


  isEnabled() {
    const now = new Date();
    const startDate = new Date(this.cucu.startDate);
    startDate.setMinutes(startDate.getMinutes() - 5);
    const endDate = new Date(this.cucu.startDate);
    endDate.setMinutes(endDate.getMinutes() + 25);
    return now.toISOString() > startDate.toISOString()
      && now.toISOString() < endDate.toISOString();
  }

  getTooltipText() {
    if (this.isPast) {
      return 'Questo CUCÙ si é già concluso';
    } else {
      return this.isEnabled() ? 'Entra' : this.comebackLaterText;
    }
  }

  getStatus() {
    return this.isEnabled() ? 'primary' : 'disabled';
  }

  getLangEmoji(lang: string) {
    return getEmojiForLang(lang);
  }

  toCall() {
    if (this.isEnabled()) {
      this.gaService.event('to_call', 'cucu_box');
      window.open(this.cucu.inviteUrl);
    }
  }


}
