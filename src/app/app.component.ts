import {Component, HostListener, OnInit} from '@angular/core';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {DonationsService} from './services/donations/donations.service';
import {combineLatest} from 'rxjs';
import {filter} from 'rxjs/operators';
import set = Reflect.set;
import {getLangs} from './util/languages.util';
import {UserService} from './services/user/user.service';
import {ScrollerService} from './services/scroller/scroller.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  smallDevice = false;
  menuItems: NbMenuItem[];

  constructor(private router: Router,
              private translate: TranslateService,
              private scrollerService: ScrollerService,
              protected gaService: GoogleAnalyticsService,
              private userService: UserService,
              public donationsService: DonationsService,
              private nbMenuService: NbMenuService,
  ) {
    this.smallDevice = window.innerWidth < 569;
    this.translate.setDefaultLang('en');
    const setLanguage = localStorage.getItem('language');
    const browserLanguage = this.translate.getBrowserLang();
    if (['en', 'it', 'es'].includes(setLanguage)) {
      translate.use(setLanguage);
    } else if (['en', 'it', 'es'].includes(browserLanguage)) {
      translate.use(browserLanguage);
    } else {
      translate.use('en');
    }

    combineLatest(
      this.translate.get('navbar.CUCUS'),
      this.translate.get('navbar.MANIFEST'),
      this.translate.get('navbar.HOW_TO'),
      this.translate.get('navbar.DONATE'))
      .subscribe(([c, m, h, d]) => {
        this.menuItems = [
          {title: c},
          {title: m, link: 'manifest'},
          {title: h, link: 'how'},
          {title: d},
        ];
      });
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'mobile-context-menu'))
      .subscribe((e) => {
        if (e.item.title === this.menuItems[3].title) {
          this.donationsService.toDonationSite();
        } else if (e.item.title === this.menuItems[0].title) {
          this.toCucus();
        }
      });
  }

  async toCucus() {
    this.scrollerService.scrollToCucus.next(true);
  }

  @HostListener('window:resize')
  onResize() {
    this.smallDevice = window.innerWidth < 569;
  }
}

