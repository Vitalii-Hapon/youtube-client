import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {
  private viewsSorting: boolean = true;
  private dateSorting: boolean = true;
  public settingsVisible: boolean = false;

  constructor() {
  }

  public ngOnInit(): void {
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
