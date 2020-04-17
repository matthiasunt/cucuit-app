import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

}
