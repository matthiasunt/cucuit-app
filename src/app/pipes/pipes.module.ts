import {NgModule} from '@angular/core';
import {ElementStatusPipe} from './element-status/element-status.pipe';
import {CucuIsOpenPipe} from './cucu-is-open/cucu-is-open.pipe';


@NgModule({
  declarations: [
    ElementStatusPipe,
    CucuIsOpenPipe
  ],
  imports: [],
  exports: [
    ElementStatusPipe,
    CucuIsOpenPipe,
  ],
  providers: [
    CucuIsOpenPipe,
  ]
})
export class PipesModule {
}
