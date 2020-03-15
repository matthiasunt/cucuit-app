import {Component} from '@angular/core';
import {NbWindowService} from '@nebular/theme';
import {AddCucuComponent} from './components/add-cucu/add-cucu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(
    // private windowService: NbWindowService
  ) {
  }

  public openCreateCucu() {
    // this.windowService.open(AddCucuComponent, {title: `Window`});
  }
}


