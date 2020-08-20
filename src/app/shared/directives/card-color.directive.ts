import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
             selector: '[footerColor]'
           })
export class CardColorDirective implements OnInit {
  @Input() public datePeriod: number;

  constructor(private elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    if (this.datePeriod < 7) {
      this.elementRef.nativeElement.style.backgroundColor = 'var(--primary-blue)';
    } else if (this.datePeriod < 31) {
      this.elementRef.nativeElement.style.backgroundColor = 'var(--primary-green)';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'var(--red-color)';
    }
  }
}
