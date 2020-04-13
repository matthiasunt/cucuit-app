import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule,
  NbTooltipModule, NbUserModule
} from '@nebular/theme';
import {CucuBoxComponent} from './cucu-box.component';
import {TranslateModule} from '@ngx-translate/core';
import {PipesModule} from '../../pipes/pipes.module';
import { ShareLinkComponent } from './share-link/share-link.component';


@NgModule({
  declarations: [CucuBoxComponent, ShareLinkComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTooltipModule,
    TranslateModule,
    NbIconModule,
    PipesModule,
    NbFormFieldModule,
    NbInputModule,
  ],
  exports: [CucuBoxComponent]
})
export class CucuBoxModule {
}
