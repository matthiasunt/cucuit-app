import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NbFormFieldModule, NbIconModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    TranslateModule,
    CommonModule,
    FontAwesomeModule,
    NbIconModule,
    NbFormFieldModule,
    RouterModule,
  ],
  exports: [FooterComponent]
})
export class FooterModule {
}
