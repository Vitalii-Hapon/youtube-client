import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {

  public settingsVisible: boolean = false;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public toggleSettings(): void {
    this.settingsVisible = !this.settingsVisible;
  }
}
