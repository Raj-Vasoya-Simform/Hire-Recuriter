import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProffesorDataComponent } from './add-proffesor-data.component';

describe('AddProffesorDataComponent', () => {
  let component: AddProffesorDataComponent;
  let fixture: ComponentFixture<AddProffesorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProffesorDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProffesorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
