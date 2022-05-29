import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMainInformationComponent } from './forms-main-information.component';

describe('FormsMainInformationComponent', () => {
  let component: FormsMainInformationComponent;
  let fixture: ComponentFixture<FormsMainInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsMainInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsMainInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
