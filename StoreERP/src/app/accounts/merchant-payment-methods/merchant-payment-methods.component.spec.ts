import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantPaymentMethodsComponent } from './merchant-payment-methods.component';

describe('MerchantPaymentMethodsComponent', () => {
  let component: MerchantPaymentMethodsComponent;
  let fixture: ComponentFixture<MerchantPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantPaymentMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
