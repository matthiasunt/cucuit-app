import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DbService} from '../../services/db/db.service';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {Cucu} from '../../models/cucu';
import {ActivatedRoute, Router} from '@angular/router';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Location, LocationStrategy} from '@angular/common';


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
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'cucus') {
        setTimeout(() => {
          this.scrollToElement(this.cucusElement.nativeElement);
          setTimeout(() => {
            this.justNavigatedToCucus = true;
          }, 700);
        }, 1);
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
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
