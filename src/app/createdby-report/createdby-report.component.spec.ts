import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedbyReportComponent } from './createdby-report.component';

describe('CreatedbyReportComponent', () => {
  let component: CreatedbyReportComponent;
  let fixture: ComponentFixture<CreatedbyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedbyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedbyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
