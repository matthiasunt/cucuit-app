import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule, NbSelectModule,
  NbTooltipModule, NbUserModule
} from '@nebular/theme';
import {CucuBoxComponent} from './cucu-box.component';


@NgModule({
  declarations: [CucuBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
  ],
  exports: [CucuBoxComponent]
})
export class CucuBoxModule {
}
