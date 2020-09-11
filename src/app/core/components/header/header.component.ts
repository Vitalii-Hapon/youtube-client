import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FindingParamsService} from '../../services/finding-params.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {AuthService} from '../../../login/services/auth.service';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit, OnDestroy {
  private viewsSorting: boolean = null;
  private dateSorting: boolean = true;
  public settingsVisible: boolean = false;
  public lookingValue: FormControl = this.fb.control('', [Validators.required, Validators.minLength(4)]);
  public filterValue: FormControl = this.fb.control('', Validators.required);
  public ngUnsubscribe: Subject<void> = new Subject();
  public authStatus: boolean;

  constructor(private fb: FormBuilder,
              private findingParams: FindingParamsService,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.filterValue.valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(value =>
                   this.findingParams.filterValue.emit(value)
      );

    this.authService.isAuthorized
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(
        authStatus => this.authStatus = authStatus
      );
  }

  public toggleSettings(): void {
    this.settingsVisible = !this.settingsVisible;
  }

  public dateSortingState(): string {
    switch (this.dateSorting) {
      case true:
        return 'keyboard_arrow_up';
      case false:
        return 'keyboard_arrow_down';
      default:
        return '';
    }
  }

  public changeDateSortingState(): void {
    if (this.dateSorting === null) {
      this.dateSorting = true;
    } else {
      this.dateSorting = !this.dateSorting;
    }
    this.findingParams.sortByDate.emit(this.dateSorting);
    this.viewsSorting = null;
  }

  public viewsSortingState(): string {
    switch (this.viewsSorting) {
      case true:
        return 'keyboard_arrow_up';
      case false:
        return 'keyboard_arrow_down';
      default:
        return '';
    }
  }

  public changeViewsSortingState(): void {
    if (this.viewsSorting === null) {
      this.viewsSorting = true;
    } else {
      this.viewsSorting = !this.viewsSorting;
    }
    this.findingParams.sortByViews.emit(this.viewsSorting);
    this.dateSorting = null;
  }

  public pushQuery(value: string): void {
    this.findingParams.lookingValue.emit(value);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  public logout(): void {
    this.authService.Logout();
  }

  public getUserName(): string {
    if (this.authStatus) {
      return localStorage.getItem('userName');
    } else {
      return 'no user';
    }
  }
}
