import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFormCreateComponent } from './job-form-create.component';

describe('JobFormCreateComponent', () => {
  let component: JobFormCreateComponent;
  let fixture: ComponentFixture<JobFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
