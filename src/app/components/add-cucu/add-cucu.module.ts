import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MapModule} from '../map/map.module';
import {AddCucuComponent} from './add-cucu.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbTooltipModule
} from '@nebular/theme';


@NgModule({
  declarations: [AddCucuComponent],
  imports: [
    CommonModule,
    FormsModule,
    MapModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule,
    NbButtonModule,
    NbTooltipModule,
  ],
  exports: [AddCucuComponent]
})
export class AddCucuModule {
}
