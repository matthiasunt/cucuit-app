import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-how',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss']
})
export class ManifestComponent implements OnInit {

  constructor(public translate: TranslateService,
              protected gaService: GoogleAnalyticsService,
              ) {
  }

  ngOnInit() {
    this.gaService.pageView('manifest', 'Manifest');
  }

}
