import {Component} from '@angular/core';
import {NbWindowService} from '@nebular/theme';
import {AddCucuComponent} from './components/add-cucu/add-cucu.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(
    private translate: TranslateService,
    // private windowService: NbWindowService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang());

  }

  public openCreateCucu() {
    // this.windowService.open(AddCucuComponent, {title: `Window`});
  }
}


