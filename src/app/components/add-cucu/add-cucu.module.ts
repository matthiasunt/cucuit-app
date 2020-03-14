import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AddCucuComponent} from './add-cucu.component';
import {NbCardModule, NbInputModule} from '@nebular/theme';

const routes: Routes = [
  {path: '', component: AddCucuComponent}
];

@NgModule({
  declarations: [AddCucuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbInputModule,
  ],
  exports: [AddCucuComponent]
})
export class AddCucuModule {
}
