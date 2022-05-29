import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRequirementsComponent } from './basic-requirements.component';

describe('BasicRequirementsComponent', () => {
  let component: BasicRequirementsComponent;
  let fixture: ComponentFixture<BasicRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
