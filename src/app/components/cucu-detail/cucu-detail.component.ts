import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {DbService} from '../../services/db/db.service';

@Component({
  selector: 'app-cucu-detail',
  templateUrl: './cucu-detail.component.html',
  styleUrls: ['./cucu-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CucuDetailComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    public dbService: DbService,
  ) {
  }

  ngOnInit() {
  }

}
