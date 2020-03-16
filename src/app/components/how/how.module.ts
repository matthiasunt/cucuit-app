import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AddCucuModule} from '../add-cucu/add-cucu.module';
import {CucuBoxModule} from '../cucu-box/cucu-box.module';
import {TranslateModule} from '@ngx-translate/core';
import {HowComponent} from './how.component';

const routes: Routes = [
  {path: '', component: HowComponent}
];

@NgModule({
  declarations: [HowComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild(routes),
    AddCucuModule,
    CucuBoxModule,
  ],
  exports: [HowComponent]
})
export class HowModule {
}
