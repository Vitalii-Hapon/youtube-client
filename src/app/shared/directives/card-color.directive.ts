import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
             selector: '[footerColor]'
           })
export class CardColorDirective {
  @Input() private date: Date;

  private nowDate: Date = new Date();
  public period: number = 0;

  constructor(private elementRef: ElementRef) {
    this.period = Math.round((+this.nowDate - +this.date) / 3600000 / 24);
    if (this.period > 180) {
      this.elementRef.nativeElement.style.backgroundColor = 'var(--red-color)';
    } else if (this.period > 7) {
      this.elementRef.nativeElement.style.backgroundColor = 'var(--primary-green)';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'var(--primary-blue)';
    }
  }
}
