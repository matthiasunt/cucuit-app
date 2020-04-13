import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {CucuDetailComponent} from './cucu-detail.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cucu-detail-entry',
  template: '',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CucuDetailEntryComponent {


  constructor(public dialogService: NbDialogService,
              private router: Router,
  ) {
    this.openDetail('1');
    console.log('Hello');
  }

  public openDetail(id) {
    this.dialogService.open(CucuDetailComponent, {context: id});


    // this.windowService.open(CucuDetailComponent, {title: this.cucu.topic});
  }
}
