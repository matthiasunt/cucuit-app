import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ThemeService} from '../../../services/theme/theme.service';
import {Cucu} from '../../../models/cucu';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareLinkComponent implements OnInit {
  public cucu: Cucu;
  constructor(
    public theme: ThemeService,
  ) {
  }

  ngOnInit() {
  }

}
