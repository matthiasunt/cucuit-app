import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowComponent implements OnInit {

  videoUrl = new BehaviorSubject<string>(null);

  constructor(public translate: TranslateService,
              public sanitizer: DomSanitizer,
  ) {
    this.setVideoForLang();
    translate.onLangChange.subscribe(() => {
      this.setVideoForLang();
    });
  }

  ngOnInit() {
  }

  setVideoForLang() {
    let videoId = '';
    switch (this.translate.currentLang) {
      case 'es':
        videoId = 'B7ONCJFeMKQ';
        break;
      case 'it':
        videoId = 'DznpJztZhqc';
        break;
      default:
        videoId = '9rdY_upgX4Y';
        break;
    }
    this.videoUrl.next(`https://www.youtube.com/embed/${videoId}?&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0'`);
  }

}
