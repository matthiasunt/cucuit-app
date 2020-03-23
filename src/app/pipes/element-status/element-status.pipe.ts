import {Pipe, PipeTransform} from '@angular/core';
import {FormControl} from '@angular/forms';

@Pipe({
  name: 'elementStatus'
})
export class ElementStatusPipe implements PipeTransform {

  transform(control: FormControl): any {
    return control.valid || !control.dirty ? 'basic' : 'danger';
  }
}
