import {Injectable} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  private donationUrls: { locale: string, url: string }[] = [
    {locale: 'it', url: 'https://italianonprofit.it/donazioni-coronavirus'},
    {locale: 'es', url: 'https://www.contraelcoronavirus.org'},
    {locale: 'en', url: 'https://www.gofundme.com/discover'}
  ];

  constructor(protected gaService: GoogleAnalyticsService,
              private translate: TranslateService,
  ) {
  }

  public toDonationSite() {
    let locale: string;
    console.log(this.translate.currentLang);
    switch (this.translate.currentLang) {
      case 'es':
        locale = 'es';
        break;
      case 'it':
        locale = 'it';
        break;
      case 'en':
        locale = 'en';
        break;
      default:
        locale = 'en';
        break;
    }
    const url = this.donationUrls.find(u => u.locale === locale).url;
    window.open(url);
    this.gaService.event('to_donation_site');
  }
}
