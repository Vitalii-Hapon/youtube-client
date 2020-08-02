import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemCardComponent } from './create-item-card.component';

describe('CreateItemCardComponent', () => {
  let component: CreateItemCardComponent;
  let fixture: ComponentFixture<CreateItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
