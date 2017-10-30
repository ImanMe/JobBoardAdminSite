import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineApplyComponent } from './online-apply.component';

describe('OnlineApplyComponent', () => {
  let component: OnlineApplyComponent;
  let fixture: ComponentFixture<OnlineApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
