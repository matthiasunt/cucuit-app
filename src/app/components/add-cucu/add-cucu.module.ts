import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddCucuComponent} from './add-cucu.component';
import {
  NbAutocompleteModule,
  NbButtonModule, NbCalendarModule,
  NbCardModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule, NbRadioModule, NbSelectModule, NbToastrModule, NbToastrService, NbToggleModule,
  NbTooltipModule
} from '@nebular/theme';
import {TranslateModule} from '@ngx-translate/core';
import {PipesModule} from '../../pipes/pipes.module';
import { PostSuccessComponent } from './post-success/post-success.component';
import {CucuBoxModule} from '../cucu-box/cucu-box.module';


@NgModule({
  declarations: [AddCucuComponent, PostSuccessComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbCardModule,
        NbFormFieldModule,
        NbIconModule,
        NbInputModule,
        NbDatepickerModule,
        NbButtonModule,
        NbTooltipModule,
        NbSelectModule,
        NbAutocompleteModule,
        NbToastrModule,
        TranslateModule,
        PipesModule,
        NbCalendarModule,
        NbToggleModule,
        NbRadioModule,
        CucuBoxModule,
    ],
  providers: [
    NbToastrService,
  ],
  exports: [AddCucuComponent],
})
export class AddCucuModule {
}
