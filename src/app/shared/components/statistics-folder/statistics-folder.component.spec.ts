import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsFolderComponent } from './statistics-folder.component';

describe('StatisticsFolderComponent', () => {
  let component: StatisticsFolderComponent;
  let fixture: ComponentFixture<StatisticsFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
