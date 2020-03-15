import {Component, Input, OnInit} from '@angular/core';
import {Cucu} from '../../models/cucu';

@Component({
  selector: 'app-cucu-box',
  templateUrl: './cucu-box.component.html',
  styleUrls: ['./cucu-box.component.scss']
})
export class CucuBoxComponent implements OnInit {

  @Input() cucu: Cucu;

  constructor() {
  }

  ngOnInit() {
  }

}
