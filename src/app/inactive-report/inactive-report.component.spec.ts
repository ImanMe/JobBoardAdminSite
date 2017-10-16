import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveReportComponent } from './inactive-report.component';

describe('InactiveReportComponent', () => {
  let component: InactiveReportComponent;
  let fixture: ComponentFixture<InactiveReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
