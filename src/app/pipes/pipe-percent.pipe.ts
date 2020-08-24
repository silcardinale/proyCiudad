import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePercent'
})
export class PipePercentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
