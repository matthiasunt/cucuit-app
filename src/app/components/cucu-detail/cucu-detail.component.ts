import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {DbService} from '../../services/db/db.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cucu} from '../../models/cucu';
import {combineLatest, Observable} from 'rxjs';
import {isToday} from '../../util/date.util';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cucu-detail',
  templateUrl: './cucu-detail.component.html',
  styleUrls: ['./cucu-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CucuDetailComponent implements OnInit {

  cucu$: Observable<Cucu>;
  id: string;

  isByUser = false;

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
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.cucu$ = this.dbService.getCucu(this.id);
      this.dbService.createdbyUser(this.cucu$).subscribe(res => this.isByUser = res);
    } else {
      console.error('CUCU id not defined');
    }
  }

  deleteCucu() {
    this.dbService.deleteCucu(this.id).subscribe(async (res: any) => {
      if (res._id) {
        await this.router.navigateByUrl('');
      }
    });
  }

}
