import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DbService} from '../../services/db/db.service';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {Cucu} from '../../models/cucu';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('cucusElement') cucusElement: ElementRef;

  doWeHaveMore = false;

  constructor(private translate: TranslateService,
              public dbService: DbService,
              protected gaService: GoogleAnalyticsService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.gaService.pageView('', 'Home');

  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'cucus') {
        this.scrollToElement(this.cucusElement.nativeElement);
      }
    });
  }

  loadMore() {
  }

  public trackByFn(index, item: Cucu) {
    return item._id;
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
