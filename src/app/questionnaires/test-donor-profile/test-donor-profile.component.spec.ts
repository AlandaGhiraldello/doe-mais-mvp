import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDonorProfileComponent } from './test-donor-profile.component';

describe('TestDonorProfileComponent', () => {
  let component: TestDonorProfileComponent;
  let fixture: ComponentFixture<TestDonorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDonorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDonorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
