import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobStatusComponent } from './apply-job-status.component';

describe('ApplyJobStatusComponent', () => {
  let component: ApplyJobStatusComponent;
  let fixture: ComponentFixture<ApplyJobStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyJobStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyJobStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
