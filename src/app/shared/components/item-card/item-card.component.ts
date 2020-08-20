import {Component, Input, OnInit} from '@angular/core';
import {Iitem} from '../../models/item';

@Component({
             selector: 'app-item-card',
             templateUrl: './item-card.component.html',
             styleUrls: ['./item-card.component.scss']
           })

export class ItemCardComponent implements OnInit {

  @Input() public item: Iitem;
  public date: Date = new Date();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getPeriod(): number {
    const publishedDate: Date = new Date(this.item.snippet.publishedAt);
    return Math.round((+this.date - +publishedDate) / 3600000 / 24);
  }
}
