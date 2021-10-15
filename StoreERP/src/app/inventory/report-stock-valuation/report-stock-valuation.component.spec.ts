import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStockValuationComponent } from './report-stock-valuation.component';

describe('ReportStockValuationComponent', () => {
  let component: ReportStockValuationComponent;
  let fixture: ComponentFixture<ReportStockValuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStockValuationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStockValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
