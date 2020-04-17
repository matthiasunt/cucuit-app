import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'getCucuUrl'
})
export class GetCucuUrlPipe implements PipeTransform {

  transform(cucuId: string): any {
    if (cucuId && cucuId.length > 0) {
      return `${environment.appUrl}/cucus/${cucuId}`;
    }
  }

}
