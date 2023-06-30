import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfJobComponent } from './list-of-job.component';

describe('ListOfJobComponent', () => {
  let component: ListOfJobComponent;
  let fixture: ComponentFixture<ListOfJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
