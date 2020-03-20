import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss']
})
export class HowComponent implements OnInit {

  constructor(public translate: TranslateService,
              protected gaService: GoogleAnalyticsService,
              ) {
  }

  ngOnInit() {
    this.gaService.pageView('manifest', 'Manifest');
  }

}
