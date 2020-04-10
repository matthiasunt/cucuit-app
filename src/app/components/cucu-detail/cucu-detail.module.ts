import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule, NbIconModule,
  NbTooltipModule, NbUserModule
} from '@nebular/theme';
import {TranslateModule} from '@ngx-translate/core';
import {CucuDetailComponent} from './cucu-detail.component';


@NgModule({
  declarations: [CucuDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTooltipModule,
    TranslateModule,
    NbIconModule,
  ],
  exports: [CucuDetailComponent]
})
export class CucuDetailModule {
}
