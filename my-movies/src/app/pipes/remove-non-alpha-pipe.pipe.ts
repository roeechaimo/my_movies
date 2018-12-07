import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'removeNonAlpha'
})
export class RemoveNonAlphaPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/[^0-9a-z]/gi, " ");    
  }

}
