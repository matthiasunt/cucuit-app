import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DbService} from '../../services/db/db.service';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {Cucu} from '../../models/cucu';
import {ActivatedRoute, Router} from '@angular/router';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Location, LocationStrategy, ViewportScroller} from '@angular/common';
import {ScrollerService} from '../../services/scroller/scroller.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('cucus') cucusElement: ElementRef;
  doWeHaveMore = false;
  faInstagram = faInstagram;

  private justNavigatedToCucus = false;

  constructor(public translate: TranslateService,
              private scrollerService: ScrollerService,
              private router: Router,
              private location: Location,
              public dbService: DbService,
              protected gaService: GoogleAnalyticsService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.gaService.pageView('', 'Home');
  }

  ngAfterViewInit() {
    this.scrollerService.scrollToCucus.subscribe((scroll) => {
      if (scroll) {
        this.cucusElement.nativeElement
          .scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        setTimeout(() => {
          this.justNavigatedToCucus = true;
        }, 1000);
      }
    });

    this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'cucus') {
        setTimeout(() => {
          this.cucusElement.nativeElement
            .scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }, 100);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  async scrollHandler() {
    if (this.justNavigatedToCucus) {
      this.location.replaceState('');
      this.justNavigatedToCucus = false;
    }
  }

  loadMore() {
  }

  public trackByFn(index, item: Cucu) {
    return item._id;
  }

  scrollToElement(element): void {
    // this.viewportScroller.scrollToAnchor(element.anchor);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
