import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  public transform(counter: string): string {
    function round(value: string, n: number): string {
      return (+value / n).toFixed(1);
    }
    if (counter.length >= 6) {
     return round(counter, 1000000) + ' M';
    } else {
      if (counter.length > 3) {
        return round(counter, 1000) + ' К';
      } else {
        return counter;
      }
    }
  }

}
