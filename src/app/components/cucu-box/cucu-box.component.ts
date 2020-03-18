import {Component, Input, OnInit} from '@angular/core';
import {Cucu} from '../../models/cucu';
import {DbService} from '../../services/db/db.service';
import {isToday} from '../../util/date.util';
import {getEmojiForLang} from '../../util/languages.util';

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

  constructor(public dbService: DbService) {
  }

  ngOnInit() {
    if (this.cucu.avatarId && this.cucu.avatarId.length > 0) {
      this.imageUrl = `${this.dbService.getImageBaseUrl()}/${this.cucu.avatarId}`;
    }
    const date = new Date(this.cucu.startDate);
    this.time = date.toLocaleTimeString(
      [],
      {hour: '2-digit', minute: '2-digit'}
    );

    this.day = isToday(date) ? 'Today' : 'Tomorrow';
  }

  getLangEmoji(lang: string) {
    return getEmojiForLang(lang);
  }


}
