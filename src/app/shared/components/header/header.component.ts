import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {
  private settingsVisible: boolean = false;
  private viewsSorting: boolean = true;
  private dateSorting: boolean = true;
  private date: Date = new Date();
  private anotherDate: Date = new Date('2019-09-16T16:53:41.000Z');

  constructor() {
  }

  public ngOnInit(): void {
    console.log(Math.round((+this.date - +this.anotherDate) / 3600000 / 24));
  }

  public toggleSettings(): void {
    this.settingsVisible = !this.settingsVisible;
  }

  public dateSortingState(): string {
    if (this.dateSorting) {
      return 'keyboard_arrow_down';
    } else {
      return 'keyboard_arrow_up';
    }
  }

  public changeDateSortingState(): void {
    this.dateSorting = !this.dateSorting;
  }

  public viewsSortingState(): string {
    if (this.viewsSorting) {
      return 'keyboard_arrow_down';
    } else {
      return 'keyboard_arrow_up';
    }
  }

  public changeViewsSortingState(): void {
    this.viewsSorting = !this.viewsSorting;
  }
}
