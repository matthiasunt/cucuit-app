import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getCucuUrl'
})
export class GetCucuUrlPipe implements PipeTransform {

  transform(cucuId: string): any {
    if (cucuId && cucuId.length > 0) {
      return `${window.location.protocol}://${window.location.hostname}/${cucuId}`;
    }
  }

}
