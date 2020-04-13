import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getCucuUrl'
})
export class GetCucuUrlPipe implements PipeTransform {

  transform(cucuId: string): any {
    if (cucuId && cucuId.length > 0) {
      console.log(window.location.href);
      return `${window.location.href}cucus/${cucuId}`;
    }
  }

}
