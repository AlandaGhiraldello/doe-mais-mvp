import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOtherInformationComponent } from './forms-other-information.component';

describe('FormsOtherInformationComponent', () => {
  let component: FormsOtherInformationComponent;
  let fixture: ComponentFixture<FormsOtherInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsOtherInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsOtherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
