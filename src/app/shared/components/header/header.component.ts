import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FindingParamsService} from '../../services/finding-params.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit, OnDestroy {
  private viewsSorting: boolean = true;
  private dateSorting: boolean = true;
  public settingsVisible: boolean = false;
  public lookingValue: FormControl = this.fb.control('', [Validators.required, Validators.minLength(4)]);
  public filterValue: FormControl = this.fb.control('', Validators.required);
  public ngUnsubscribe: Subject<void> = new Subject();

  constructor(private fb: FormBuilder,
              private findingParams: FindingParamsService) {
  }

  public ngOnInit(): void {
    this.filterValue.valueChanges
      .pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe( value => this.findingParams.filterValue.emit(value));
  }

  public toggleSettings(): void {
    this.settingsVisible = !this.settingsVisible;
  }

  public dateSortingState(): string {
    if (this.dateSorting) {
      return 'keyboard_arrow_down';
    } else {
      return 'keyboard_arrow_up';
    }
  }

  public changeDateSortingState(): void {
    this.dateSorting = !this.dateSorting;
    this.findingParams.sortByDate.emit(this.dateSorting);
  }

  public viewsSortingState(): string {
    if (this.viewsSorting) {
      return 'keyboard_arrow_down';
    } else {
      return 'keyboard_arrow_up';
    }
  }

  public changeViewsSortingState(): void {
    this.viewsSorting = !this.viewsSorting;
    this.findingParams.sortByViews.emit(this.viewsSorting);
  }

  public pushQuery(value: string): void {
    this.findingParams.lookingValue.emit(value);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }
}
