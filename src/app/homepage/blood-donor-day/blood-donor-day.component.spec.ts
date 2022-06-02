import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonorDayComponent } from './blood-donor-day.component';

describe('BloodDonorDayComponent', () => {
  let component: BloodDonorDayComponent;
  let fixture: ComponentFixture<BloodDonorDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonorDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonorDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
