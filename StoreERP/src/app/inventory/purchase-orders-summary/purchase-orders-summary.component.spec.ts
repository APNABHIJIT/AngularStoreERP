import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersSummaryComponent } from './purchase-orders-summary.component';

describe('PurchaseOrdersSummaryComponent', () => {
  let component: PurchaseOrdersSummaryComponent;
  let fixture: ComponentFixture<PurchaseOrdersSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrdersSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrdersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
