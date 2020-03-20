import {Component, HostListener} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  smallDevice = false;
  menuItems: NbMenuItem[] = [
    {title: 'Manifesto', link: 'manifest'},
    {title: 'Dona', url: 'https://italianonprofit.it/donazioni-coronavirus/', target: '_blank'},
  ];

  constructor(private router: Router,
              private translate: TranslateService,
  ) {
    this.smallDevice = window.innerWidth < 569;
    this.translate.setDefaultLang('it');
    // this.translate.use(this.translate.getBrowserLang());
    this.translate.use('it');
  }

  @HostListener('window:resize')
  onResize() {
    this.smallDevice = window.innerWidth < 569;
  }

  toDonationSite() {
    window.open('https://italianonprofit.it/donazioni-coronavirus/');
  }
}


