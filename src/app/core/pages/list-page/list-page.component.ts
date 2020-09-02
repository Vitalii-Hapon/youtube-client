import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../../../shared/services/items.service';
import {Iitem} from '../../../shared/models/item';
import {FindingParamsService} from '../../../shared/services/finding-params.service';

@Component({
             selector: 'app-list-page',
             templateUrl: './list-page.component.html',
             styleUrls: ['./list-page.component.scss']
           })
export class ListPageComponent implements OnInit {
  public items: Iitem[];
  public filterValue: string;
  public sortParams: 'DateOnTop' | 'DateOnBottom' | 'ViewsOnTop' | 'ViewsOnBottom';

  constructor(private itemsService: ItemsService,
              private findingParams: FindingParamsService) {
  }

  public ngOnInit(): void {
    if (sessionStorage.getItem('findingValue')) {
      this.items = this.itemsService.getItems();
    } else {
      this.items = [];
    }

    this.findingParams.lookingValue.subscribe((value) => {
      if (value) {
        this.items = this.itemsService.getItems();
        sessionStorage.setItem('findingValue', value);
      }
    });

    this.findingParams.filterValue.subscribe(value =>
                                               this.filterValue = value
    );

    this.findingParams.sortByDate.subscribe(value => {
      if (value) {
        this.sortParams = 'DateOnTop';
      } else {
        this.sortParams = 'DateOnBottom';
      }
    });

    this.findingParams.sortByViews.subscribe(value => {
      if (value) {
        this.sortParams = 'ViewsOnTop';
      } else {
        this.sortParams = 'ViewsOnBottom';
      }
    });
  }

}
