import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccountComponent } from './form-account.component';

describe('FormAccountComponent', () => {
  let component: FormAccountComponent;
  let fixture: ComponentFixture<FormAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
