import {Injectable} from '@angular/core';

@Injectable({
              providedIn: 'root'
            })
export class HelperService {

  public nowDate: Date = new Date();
  public inDays: number = 3600000 * 24;

  constructor() {
  }

  public toDate(stringDate: string): Date {
    return new Date(stringDate);
  }

  public getPublishedPeriod(publishedAt: string): number {
    const publishedDate: Date = this.toDate(publishedAt);
    return Math.round((+this.nowDate - +publishedDate) / this.inDays);
  }
}
