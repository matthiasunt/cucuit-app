import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DbService} from '../../services/db/db.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
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

  constructor(private translate: TranslateService, public dbService: DbService) {
  }

  ngOnInit() {
    const lang = this.translate.getBrowserLang();
    console.log(lang);
  }

  loadMore() {

  }

}
