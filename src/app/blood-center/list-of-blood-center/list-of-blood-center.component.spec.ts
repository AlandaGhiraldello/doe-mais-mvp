import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBloodCenterComponent } from './list-of-blood-center.component';

describe('ListOfBloodCenterComponent', () => {
  let component: ListOfBloodCenterComponent;
  let fixture: ComponentFixture<ListOfBloodCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfBloodCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBloodCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
