import {NgModule} from '@angular/core';
import {ElementStatusPipe} from './element-status/element-status.pipe';
import {CucuIsOpenPipe} from './cucu-is-open/cucu-is-open.pipe';
import {GetCucuUrlPipe} from './get-cucu-url/get-cucu-url.pipe';


@NgModule({
  declarations: [
    ElementStatusPipe,
    CucuIsOpenPipe,
    GetCucuUrlPipe,
  ],
  imports: [],
  exports: [
    ElementStatusPipe,
    CucuIsOpenPipe,
    GetCucuUrlPipe,
  ],
  providers: [
    CucuIsOpenPipe,
    GetCucuUrlPipe,
  ]
})
export class PipesModule {
}
