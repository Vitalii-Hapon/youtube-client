import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {
  FIRST_BOTTOM_COLOR,
  FIRST_SORT_DATE, OTHER_BOTTOM_COLOR,
  SECOND_BOTTOM_COLOR,
  SECOND_SORT_DATE, THIRD_BOTTOM_COLOR,
  THIRD_SORT_DATE
} from '../../core/constants/constants';
import {HelperService} from '../../core/services/helper.service';

@Directive({
             selector: '[BorderBottomColor]'
           })
export class BorderBottomColorDirective implements OnInit {
  @Input('BorderBottomColor') public publishedAt: string;
  public publishedDatePeriod: number;

  constructor(private el: ElementRef, private render: Renderer2, private helper: HelperService ) {
  }

  public ngOnInit(): void {
    this.publishedDatePeriod = this.helper.getPublishedPeriod(this.publishedAt);
    switch (true) {
      case this.publishedDatePeriod < FIRST_SORT_DATE :
        this.render.setStyle(this.el.nativeElement, 'border-bottom-color', FIRST_BOTTOM_COLOR);
        break;
      case this.publishedDatePeriod < SECOND_SORT_DATE :
        this.render.setStyle(this.el.nativeElement, 'border-bottom-color', SECOND_BOTTOM_COLOR);
        break;
      case this.publishedDatePeriod < THIRD_SORT_DATE :
        this.render.setStyle(this.el.nativeElement, 'border-bottom-color', THIRD_BOTTOM_COLOR);
        break;
      default:
        this.render.setStyle(this.el.nativeElement, 'border-bottom-color', OTHER_BOTTOM_COLOR);
    }
  }
}
