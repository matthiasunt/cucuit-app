import {NgModule} from '@angular/core';
import { ElementStatusPipe } from './element-status/element-status.pipe';


@NgModule({
  declarations: [ElementStatusPipe],
  imports: [],
    exports: [
        ElementStatusPipe
    ]
})
export class PipesModule {
}
