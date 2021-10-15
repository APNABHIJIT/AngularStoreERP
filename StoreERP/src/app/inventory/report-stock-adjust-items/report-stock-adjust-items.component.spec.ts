import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStockAdjustItemsComponent } from './report-stock-adjust-items.component';

describe('ReportStockAdjustItemsComponent', () => {
  let component: ReportStockAdjustItemsComponent;
  let fixture: ComponentFixture<ReportStockAdjustItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStockAdjustItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStockAdjustItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
