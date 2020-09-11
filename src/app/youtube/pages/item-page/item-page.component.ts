import {Component, OnInit} from '@angular/core';
import {Iitem} from '../../../shared/models/item';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../../core/services/items.service';
import {HelperService} from '../../../core/services/helper.service';

@Component({
             selector: 'app-item-page',
             templateUrl: './item-page.component.html',
             styleUrls: ['./item-page.component.scss']
           })
export class ItemPageComponent implements OnInit {
  public item: Iitem;
  public itemId: string;
  public publishedDate: Date;

  constructor(private router: ActivatedRoute,
              private itemService: ItemsService,
              private helper: HelperService) {
  }

  public ngOnInit(): void {
    this.router.params.subscribe( value => this.itemId = value.id);
    this.item = this.itemService.getItemById(this.itemId);
    console.log(this.item);
    this.publishedDate = this.helper.toDate(this.item.snippet.publishedAt);
  }

}
