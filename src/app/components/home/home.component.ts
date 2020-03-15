import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fakeCucu = {
    inviteUrl: 'https://hangouts.google.com/call/A6PK6lK45zkCf357wj-vAEEI',
    topic: 'Yoga',
    description: 'Lettura di libri in compagnia con un bel bicchiere di vino.',
    startDate: 'Sun, 15 Apr 2020 18:00:00 GMT',
    userName: 'Dario',
    language: 'it',
  };

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    const lang = this.translate.getBrowserLang();
    console.log(lang);
  }

}
