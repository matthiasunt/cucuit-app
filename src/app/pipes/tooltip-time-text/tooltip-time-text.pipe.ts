import {Pipe, PipeTransform} from '@angular/core';
import {combineLatest} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'tooltipTimeText'
})
export class TooltipTimeTextPipe implements PipeTransform {

  today: string;
  at: string;
  on: string;
  text: string;

  constructor(private translateService: TranslateService) {
    combineLatest([
      this.translateService.get('postCucu.TODAY'),
      this.translateService.get('cucuBox.join.ON'),
      this.translateService.get('cucuBox.join.AT'),
      this.translateService.get('cucuBox.join.TOOLTIP_COME_BACK_LATER')
    ]).subscribe(([today, on, at, text]) => {
      this.today = today;
      this.on = on;
      this.at = at;
      this.text = text;
    });
  }

  transform(startDate): string {
    const d = new Date(startDate);
    const now = new Date();
    const time = d.toLocaleTimeString(
      [],
      {hour: '2-digit', minute: '2-digit'}
    );
    if (now < d) {
      return `${this.text} ${this.on} ${d.toLocaleDateString()} ${this.at} ${time}.`;
    } else {
      return ``;
    }
  }

}
