import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arr'
})
export class ArrPipe implements PipeTransform {

  transform(value: {}): string[] {
    if (!value) {
      return [];
    }
    return Object.keys(value);
  }

}
