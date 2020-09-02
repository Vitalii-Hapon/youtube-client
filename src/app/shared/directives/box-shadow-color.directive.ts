 import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {HelperService} from '../services/helper.service';
import {
  FIRST_BOTTOM_COLOR_RGBA,
  FIRST_SORT_DATE, OTHER_BOTTOM_COLOR_RGBA,
  SECOND_BOTTOM_COLOR_RGBA,
  SECOND_SORT_DATE, THIRD_BOTTOM_COLOR_RGBA, THIRD_SORT_DATE
} from '../constants/constants';

@Directive({
             selector: '[BoxShadowColor]'
           })
export class BoxShadowColorDirective {
  @Input('BoxShadowColor') public publishedAt: string;
  public publishedDatePeriod: number;

  constructor(private el: ElementRef, private render: Renderer2, private helper: HelperService) {
  }

  public ngOnInit(): void {
    this.publishedDatePeriod = this.helper.getPublishedPeriod(this.publishedAt);
    switch (true) {
      case this.publishedDatePeriod < FIRST_SORT_DATE :
        this.render.setStyle(this.el.nativeElement, 'box-shadow', `8px 8px 12px -4px ${FIRST_BOTTOM_COLOR_RGBA}`);
        break;
      case this.publishedDatePeriod < SECOND_SORT_DATE :
        this.render.setStyle(this.el.nativeElement, 'box-shadow', `8px 8px 12px -4px ${SECOND_BOTTOM_COLOR_RGBA}`);
        break;
      case this.publishedDatePeriod < THIRD_SORT_DATE :
        this.render.setStyle(this.el.nativeElement, 'box-shadow', `8px 8px 12px -4px ${THIRD_BOTTOM_COLOR_RGBA}`);
        break;
      default:
        this.render.setStyle(this.el.nativeElement, 'box-shadow', `8px 8px 12px -4px ${OTHER_BOTTOM_COLOR_RGBA}`);
    }
  }
}
