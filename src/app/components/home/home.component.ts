import {Component, OnInit} from '@angular/core';

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
    startDate: '2020-04-13T19:00:00.000+00:00',
    userName: 'Dario',
    language: 'it',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
