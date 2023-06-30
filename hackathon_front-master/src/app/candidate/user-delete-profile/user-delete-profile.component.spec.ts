import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteProfileComponent } from './user-delete-profile.component';

describe('UserDeleteProfileComponent', () => {
  let component: UserDeleteProfileComponent;
  let fixture: ComponentFixture<UserDeleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
