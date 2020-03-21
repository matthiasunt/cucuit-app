import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DbService} from '../../services/db/db.service';
import {NbWindowService} from '@nebular/theme';
import {VideoComponent} from '../video/video.component';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {DonationsService} from '../../services/donations/donations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  doWeHaveMore = false;

  constructor(private translate: TranslateService,
              private windowService: NbWindowService,
              public dbService: DbService,
              protected gaService: GoogleAnalyticsService,
              public donationsService: DonationsService,
  ) {
  }

  ngOnInit() {
    this.gaService.pageView('', 'Home');
  }

  loadMore() {
  }

  openVideoWindow() {
    this.windowService.open(VideoComponent, {title: ``});
    this.gaService.event('open_video', 'home');
  }

}
