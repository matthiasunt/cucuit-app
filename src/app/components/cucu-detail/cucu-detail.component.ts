import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {DbService} from '../../services/db/db.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cucu} from '../../models/cucu';
import {combineLatest} from 'rxjs';
import {isToday} from '../../util/date.util';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cucu-detail',
  templateUrl: './cucu-detail.component.html',
  styleUrls: ['./cucu-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CucuDetailComponent implements OnInit {

  cucuId: string;
  cucu$;
  imageUrl;
  isPast = false;
  buttonLabel;
  timeLabel;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private router: Router,
    private dialogService: NbDialogService,
    public dbService: DbService,
  ) {

    // this.openDetail('');
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cucu$ = this.dbService.getCucu(id);
    } else {
      console.error('CUCU id not defined');
    }


  }

  modalClose($event) {
    console.log($event); // { submitted: true }
  }

}
