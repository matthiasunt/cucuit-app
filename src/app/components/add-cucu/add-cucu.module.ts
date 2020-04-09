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


@NgModule({
  declarations: [AddCucuComponent],
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
  ],
  providers: [
    NbToastrService,
  ],
  exports: [AddCucuComponent],
})
export class AddCucuModule {
}
