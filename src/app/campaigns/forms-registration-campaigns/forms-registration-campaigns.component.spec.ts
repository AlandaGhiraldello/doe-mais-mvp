import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRegistrationCampaignsComponent } from './forms-registration-campaigns.component';

describe('FormsRegistrationCampaignsComponent', () => {
  let component: FormsRegistrationCampaignsComponent;
  let fixture: ComponentFixture<FormsRegistrationCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRegistrationCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRegistrationCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
