import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeText'
})
export class DateTimeTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
