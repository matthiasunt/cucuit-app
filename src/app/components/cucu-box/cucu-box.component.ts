import {Component, Input, OnInit} from '@angular/core';
import {Cucu} from '../../models/cucu';

@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss']
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;
  time: string;

  constructor() {
  }

  ngOnInit() {
    this.time = new Date(this.cucu.startDate).toLocaleTimeString(
      [],
      {hour: '2-digit', minute: '2-digit'}
    );
  }

}
