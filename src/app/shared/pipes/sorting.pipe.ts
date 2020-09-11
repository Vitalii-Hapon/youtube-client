import {Pipe, PipeTransform} from '@angular/core';
import {Iitem} from '../models/item';
import {HelperService} from '../../core/services/helper.service';

@Pipe({
        name: 'sorting'
      })
export class SortingPipe implements PipeTransform {
  constructor(private helper: HelperService) {
  }

  public transform(items: Iitem[],
                   sortParams: 'DateOnTop' | 'DateOnBottom' | 'ViewsOnTop' | 'ViewsOnBottom'): Iitem[] {
    return items.sort((a: Iitem, b: Iitem): number => {
      const dataA: number = +this.helper.toDate(a.snippet.publishedAt);
      const dataB: number = +this.helper.toDate(b.snippet.publishedAt);
      const viewA: number = +a.statistics.viewCount;
      const viewB: number = +b.statistics.viewCount;
      switch (sortParams) {
        case 'DateOnBottom':
          return dataA - dataB;
        case 'ViewsOnTop':
          return viewB - viewA;
        case  'ViewsOnBottom':
          return viewA - viewB;
        default:
          return dataB - dataA;
      }
    });
  }

}
