import {HowComponent} from './how.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: HowComponent},
];

@NgModule({
  declarations: [HowComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  exports: [HowComponent]
})
export class HowModule {
}
