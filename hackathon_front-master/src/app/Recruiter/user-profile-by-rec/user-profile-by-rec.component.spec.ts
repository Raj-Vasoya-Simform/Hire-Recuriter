import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileByRecComponent } from './user-profile-by-rec.component';

describe('UserProfileByRecComponent', () => {
  let component: UserProfileByRecComponent;
  let fixture: ComponentFixture<UserProfileByRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileByRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileByRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
