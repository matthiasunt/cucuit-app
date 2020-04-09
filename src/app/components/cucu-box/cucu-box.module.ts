import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    NbButtonModule,
    NbCardModule, NbIconModule,
    NbTooltipModule, NbUserModule
} from '@nebular/theme';
import {CucuBoxComponent} from './cucu-box.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [CucuBoxComponent],
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
  exports: [CucuBoxComponent]
})
export class CucuBoxModule {
}
