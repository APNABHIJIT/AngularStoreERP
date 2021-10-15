import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNoSalesComponent } from './customer-no-sales.component';

describe('CustomerNoSalesComponent', () => {
  let component: CustomerNoSalesComponent;
  let fixture: ComponentFixture<CustomerNoSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNoSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNoSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
