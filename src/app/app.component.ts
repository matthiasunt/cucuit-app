import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';
import {Gtag} from 'angular-gtag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {


  constructor(private router: Router,
              private gtag: Gtag,
              private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('it');

    gtag.event('test');
    // this.translate.use(this.translate.getBrowserLang());
    this.translate.use('it');
  }

  toDonationSite() {
    window.open('https://italianonprofit.it/donazioni-coronavirus/');
  }
}


