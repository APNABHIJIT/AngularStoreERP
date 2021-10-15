import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportItemSalesComponent } from './report-item-sales.component';

describe('ReportItemSalesComponent', () => {
  let component: ReportItemSalesComponent;
  let fixture: ComponentFixture<ReportItemSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportItemSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportItemSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
