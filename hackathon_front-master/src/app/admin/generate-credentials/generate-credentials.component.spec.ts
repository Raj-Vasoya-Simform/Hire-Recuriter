import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCredentialsComponent } from './generate-credentials.component';

describe('GenerateCredentialsComponent', () => {
  let component: GenerateCredentialsComponent;
  let fixture: ComponentFixture<GenerateCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
