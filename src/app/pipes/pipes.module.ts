import {NgModule} from '@angular/core';
import {ElementStatusPipe} from './element-status/element-status.pipe';
import {CucuIsOpenPipe} from './cucu-is-open/cucu-is-open.pipe';
import {GetCucuUrlPipe} from './get-cucu-url/get-cucu-url.pipe';
import { TooltipTimeTextPipe } from './tooltip-time-text/tooltip-time-text.pipe';
import { DateTimeTextPipe } from './date-time-text/date-time-text.pipe';
import { SanitizeUrlPipe } from './sanitize-url/sanitize-url.pipe';


@NgModule({
  declarations: [
    ElementStatusPipe,
    CucuIsOpenPipe,
    GetCucuUrlPipe,
    TooltipTimeTextPipe,
    DateTimeTextPipe,
    SanitizeUrlPipe,
  ],
  imports: [],
  exports: [
    ElementStatusPipe,
    CucuIsOpenPipe,
    GetCucuUrlPipe,
    TooltipTimeTextPipe,
    SanitizeUrlPipe,
  ],
  providers: [
    CucuIsOpenPipe,
    GetCucuUrlPipe,
  ]
})
export class PipesModule {
}
