import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddCucuComponent} from './add-cucu.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule, NbSelectModule,
  NbTooltipModule
} from '@nebular/theme';


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
  ],
  exports: [AddCucuComponent]
})
export class AddCucuModule {
}
