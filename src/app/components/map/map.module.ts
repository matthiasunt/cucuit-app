import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MapComponent} from './map.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: MapComponent}
];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [MapComponent]
})
export class MapModule {
}
