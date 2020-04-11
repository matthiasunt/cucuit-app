import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-post-success',
  templateUrl: './post-success.component.html',
  styleUrls: ['./post-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostSuccessComponent implements OnInit {
  declare context: any;
  cucu;
  constructor() { }

  ngOnInit() {
  }

}
