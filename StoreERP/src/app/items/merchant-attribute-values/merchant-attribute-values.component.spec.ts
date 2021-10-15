import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAttributeValuesComponent } from './merchant-attribute-values.component';

describe('MerchantAttributeValuesComponent', () => {
  let component: MerchantAttributeValuesComponent;
  let fixture: ComponentFixture<MerchantAttributeValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantAttributeValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantAttributeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
