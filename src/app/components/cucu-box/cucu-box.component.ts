import {Component, Input, OnInit} from '@angular/core';
import {Cucu} from '../../models/cucu';
import {DbService} from '../../services/db/db.service';

@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss']
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;
  time: string;

  imageUrl: string;

  constructor(public dbService: DbService) {
  }

  ngOnInit() {
    if (this.cucu.avatarId && this.cucu.avatarId.length > 0) {
      this.imageUrl = `${this.dbService.getImageBaseUrl()}/${this.cucu.avatarId}`;
    }
    this.time = new Date(Date.parse(this.cucu.startDateString)).toLocaleTimeString(
      [],
      {hour: '2-digit', minute: '2-digit'}
    );
  }

}
