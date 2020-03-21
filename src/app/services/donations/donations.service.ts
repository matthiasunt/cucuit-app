import {Injectable} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  private donationUrl = 'https://italianonprofit.it/donazioni-coronavirus/';

  constructor(protected gaService: GoogleAnalyticsService) {
  }

  public toDonationSite() {
    window.open(this.donationUrl);
    this.gaService.event('to_donation_site');
  }
}
