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

  constructor(public dbService: DbService) {
  }

  ngOnInit() {
    // console.log(this.cucu.startDateString);
    // const date = Date.parse(this.cucu.startDateString);
    // console.log(new Date(date));
    this.time = new Date(Date.parse(this.cucu.startDateString)).toLocaleTimeString(
      [],
      {hour: '2-digit', minute: '2-digit'}
    );
  }

}
