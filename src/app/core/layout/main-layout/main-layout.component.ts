import {Component, OnInit, Output} from '@angular/core';

@Component({
             selector: 'app-main-layout',
             templateUrl: './main-layout.component.html',
             styleUrls: ['./main-layout.component.scss']
           })
export class MainLayoutComponent implements OnInit {
@Output() public list: string = '111';
  constructor() {
  }

  public ngOnInit(): void {
  }

}
