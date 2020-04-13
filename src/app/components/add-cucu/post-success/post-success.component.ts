import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cucu} from '../../../models/cucu';
import {ThemeService} from '../../../services/theme/theme.service';

@Component({
  selector: 'app-post-success',
  templateUrl: './post-success.component.html',
  styleUrls: ['./post-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostSuccessComponent implements OnInit {
  public cucu: Cucu;

  constructor(
    public theme: ThemeService,
  ) {
  }

  ngOnInit() {
  }

}
