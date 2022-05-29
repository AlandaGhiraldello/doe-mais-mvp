import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWhoDonatesToWhomComponent } from './test-who-donates-to-whom.component';

describe('TestWhoDonatesToWhomComponent', () => {
  let component: TestWhoDonatesToWhomComponent;
  let fixture: ComponentFixture<TestWhoDonatesToWhomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestWhoDonatesToWhomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWhoDonatesToWhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
