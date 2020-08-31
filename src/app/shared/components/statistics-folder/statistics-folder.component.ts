import {Component, Input, OnInit} from '@angular/core';
import {Istatistic} from '../../models/statistic';

@Component({
             selector: 'app-statistics-folder',
             templateUrl: './statistics-folder.component.html',
             styleUrls: ['./statistics-folder.component.scss']
           })
export class StatisticsFolderComponent implements OnInit {
  @Input() public statistics: Istatistic;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
