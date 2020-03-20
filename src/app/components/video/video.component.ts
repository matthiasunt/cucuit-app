import {Component, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(
    protected gaService: GoogleAnalyticsService,
  ) {
  }

  ngOnInit() {
    this.gaService.pageView('', 'Video Window');
  }

}
