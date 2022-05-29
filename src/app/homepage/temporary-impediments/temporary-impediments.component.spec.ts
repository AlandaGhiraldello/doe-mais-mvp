import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryImpedimentsComponent } from './temporary-impediments.component';

describe('TemporaryImpedimentsComponent', () => {
  let component: TemporaryImpedimentsComponent;
  let fixture: ComponentFixture<TemporaryImpedimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryImpedimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryImpedimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
