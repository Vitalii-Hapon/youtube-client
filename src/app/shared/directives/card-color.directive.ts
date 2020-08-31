import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
             selector: '[footerColor]'
           })
export class CardColorDirective implements OnInit {
  @Input() public datePeriod: number;

  constructor(private elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    switch (true) {
      case this.datePeriod < 7 :
        this.elementRef.nativeElement.style.backgroundColor = 'var(--primary-blue)';
        break;
      case this.datePeriod < 31 :
        this.elementRef.nativeElement.style.backgroundColor = 'var(--primary-green)';
        break;
      case this.datePeriod < 182 :
        this.elementRef.nativeElement.style.backgroundColor = 'var(--primary-yellow)';
        break;
      default:
        this.elementRef.nativeElement.style.backgroundColor = 'var(--red-color)';
    }
  }
}
