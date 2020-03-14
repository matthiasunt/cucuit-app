import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AddCucuComponent} from './add-cucu.component';
import {
  NbButtonModule, NbCalendarModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule, NbLayoutModule,
  NbTooltipModule
} from '@nebular/theme';

const routes: Routes = [
  {path: '', component: AddCucuComponent}
];

@NgModule({
  declarations: [AddCucuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    NbCheckboxModule,
    NbTooltipModule,
    NbDatepickerModule,
    NbButtonModule,
    NbLayoutModule,
  ],
  exports: [AddCucuComponent]
})
export class AddCucuModule {
}
