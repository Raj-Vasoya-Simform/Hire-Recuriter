import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedCandidateComponent } from './applied-candidate.component';

describe('AppliedCandidateComponent', () => {
  let component: AppliedCandidateComponent;
  let fixture: ComponentFixture<AppliedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
