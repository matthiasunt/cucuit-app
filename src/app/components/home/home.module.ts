import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AddCucuModule} from '../add-cucu/add-cucu.module';
import {CucuBoxModule} from '../cucu-box/cucu-box.module';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AddCucuModule,
    CucuBoxModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
