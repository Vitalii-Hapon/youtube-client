import { Pipe, PipeTransform } from '@angular/core';
import {Iitem} from '../models/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(items: Iitem[], filterValue: string): Iitem[] {
    if (!filterValue) {
      return items;
    } else {
      return items.filter(item => {
        return item.snippet.title.toLowerCase().includes(filterValue.toLowerCase());
      });
    }
  }

}
