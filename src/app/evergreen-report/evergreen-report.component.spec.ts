import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvergreenReportComponent } from './evergreen-report.component';

describe('EvergreenReportComponent', () => {
  let component: EvergreenReportComponent;
  let fixture: ComponentFixture<EvergreenReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvergreenReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvergreenReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
