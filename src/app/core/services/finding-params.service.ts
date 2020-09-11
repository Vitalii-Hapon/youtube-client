import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindingParamsService {
  public lookingValue: EventEmitter<string> = new EventEmitter<string>();
  public filterValue: EventEmitter<string> = new EventEmitter<string>();
  public sortByDate: EventEmitter<boolean> = new EventEmitter<boolean>();
  public sortByViews: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
