import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeProfileComponent } from './college-profile.component';

describe('CollegeProfileComponent', () => {
  let component: CollegeProfileComponent;
  let fixture: ComponentFixture<CollegeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
