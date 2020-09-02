import { Pipe, PipeTransform } from '@angular/core';
import {Iitem} from '../models/item';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  public transform(items: Iitem[], ...args: unknown[]): unknown {
    return null;
  }

}
