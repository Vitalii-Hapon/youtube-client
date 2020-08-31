import {Component, Input, OnInit} from '@angular/core';
import {ItemsService} from '../../../shared/services/items.service';
import {Iitem} from '../../../shared/models/item';

@Component({
             selector: 'app-list-page',
             templateUrl: './list-page.component.html',
             styleUrls: ['./list-page.component.scss']
           })
export class ListPageComponent implements OnInit {
  public items: Iitem[] = [];

  constructor(private itemsService: ItemsService) {
  }

  public ngOnInit(): void {
    this.items = this.itemsService.getItems();
    }

}
