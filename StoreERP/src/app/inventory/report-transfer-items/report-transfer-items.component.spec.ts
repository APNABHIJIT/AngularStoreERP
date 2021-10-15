import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTransferItemsComponent } from './report-transfer-items.component';

describe('ReportTransferItemsComponent', () => {
  let component: ReportTransferItemsComponent;
  let fixture: ComponentFixture<ReportTransferItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTransferItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTransferItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
