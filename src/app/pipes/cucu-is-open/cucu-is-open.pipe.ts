import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cucuIsOpen'
})
export class CucuIsOpenPipe implements PipeTransform {

  transform(date: string): boolean {
    const now = new Date();
    const startDate = new Date(date);
    startDate.setMinutes(startDate.getMinutes() - 5);
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 90);
    return now.toISOString() > startDate.toISOString()
      && now.toISOString() < endDate.toISOString();
  }

}
