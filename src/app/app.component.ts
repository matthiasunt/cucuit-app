import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {DonationsService} from './services/donations/donations.service';
import {filter, map} from 'rxjs/operators';
import {combineLatest} from 'rxjs';

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
              protected gaService: GoogleAnalyticsService,
              public donationsService: DonationsService,
              private nbMenuService: NbMenuService,
  ) {
    this.smallDevice = window.innerWidth < 569;
    this.translate.setDefaultLang('it');
    // this.translate.use(this.translate.getBrowserLang());
    this.translate.use('it');
    combineLatest(
      this.translate.get('navbar.MANIFEST'),
      this.translate.get('navbar.DONATE'))
      .subscribe(([m, d]) => {
        this.menuItems = [
          {title: m, link: 'manifest'},
          {title: d},
        ];
      });
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'mobile-context-menu'))
      .subscribe((e) => {
        if (e.item.title === this.menuItems[1].title) {
          this.donationsService.toDonationSite();
        }
      });
  }

  @HostListener('window:resize')
  onResize() {
    this.smallDevice = window.innerWidth < 569;
  }

  onActivate(event) {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}


