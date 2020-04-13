import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AddCucuModule} from '../add-cucu/add-cucu.module';
import {CucuBoxModule} from '../cucu-box/cucu-box.module';
import {TranslateModule} from '@ngx-translate/core';
import {NbButtonModule, NbCardModule, NbWindowModule} from '@nebular/theme';
import {CucuDetailEntryComponent} from '../shared/cucu-detail/cucu-detail-entry.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild(routes),
    NbWindowModule.forChild(),
    AddCucuModule,
    CucuBoxModule,
    NbButtonModule,
    NbCardModule,
    FontAwesomeModule,
    // CucuDetailModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule {
}
