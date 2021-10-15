import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMerchantComponent } from './credit-merchant.component';

describe('CreditMerchantComponent', () => {
  let component: CreditMerchantComponent;
  let fixture: ComponentFixture<CreditMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
