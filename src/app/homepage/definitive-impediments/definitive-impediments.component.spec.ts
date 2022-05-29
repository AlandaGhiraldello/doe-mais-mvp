import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitiveImpedimentsComponent } from './definitive-impediments.component';

describe('DefinitiveImpedimentsComponent', () => {
  let component: DefinitiveImpedimentsComponent;
  let fixture: ComponentFixture<DefinitiveImpedimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitiveImpedimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitiveImpedimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
