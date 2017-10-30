import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPendingComponent } from './stats-pending.component';

describe('StatsPendingComponent', () => {
  let component: StatsPendingComponent;
  let fixture: ComponentFixture<StatsPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
