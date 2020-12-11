import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'content'
})
export class ContentPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length < 13) return value;
    else return value.slice(0,13)+'...'
    
  }

}
