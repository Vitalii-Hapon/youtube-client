import {Component, Input, OnInit} from '@angular/core';
import {Iitem} from '../../models/item';

@Component({
             selector: 'app-item-card',
             templateUrl: './item-card.component.html',
             styleUrls: ['./item-card.component.scss']
           })

export class ItemCardComponent implements OnInit {
  @Input() public item: Iitem;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
