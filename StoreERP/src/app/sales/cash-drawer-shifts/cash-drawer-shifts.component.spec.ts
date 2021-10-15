import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDrawerShiftsComponent } from './cash-drawer-shifts.component';

describe('CashDrawerShiftsComponent', () => {
  let component: CashDrawerShiftsComponent;
  let fixture: ComponentFixture<CashDrawerShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashDrawerShiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDrawerShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
