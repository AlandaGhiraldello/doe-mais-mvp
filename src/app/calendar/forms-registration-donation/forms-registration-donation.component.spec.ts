import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRegistrationDonationComponent } from './forms-registration-donation.component';

describe('FormsRegistrationDonationComponent', () => {
  let component: FormsRegistrationDonationComponent;
  let fixture: ComponentFixture<FormsRegistrationDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRegistrationDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRegistrationDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
