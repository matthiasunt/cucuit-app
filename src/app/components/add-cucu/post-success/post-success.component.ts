import {Component, OnInit, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cucu} from '../../../models/cucu';
import {ThemeService} from '../../../services/theme/theme.service';
import {DbService} from '../../../services/db/db.service';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-post-success',
  templateUrl: './post-success.component.html',
  styleUrls: ['./post-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostSuccessComponent implements OnInit {
  public cucu: Cucu;
  public closeEvent: EventEmitter<boolean>;

  constructor(
    public theme: ThemeService,
    private dbService: DbService,
    private dialogService: NbDialogService,
  ) {
  }

  ngOnInit() {
  }

  deleteCucu() {
    this.dbService.deleteCucu(this.cucu._id).subscribe((res: any) => {
      if (res && res._id) {
        this.closeEvent.next(true);
      }
    });
  }

}
