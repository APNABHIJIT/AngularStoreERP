import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportChargesComponent } from './report-charges.component';

describe('ReportChargesComponent', () => {
  let component: ReportChargesComponent;
  let fixture: ComponentFixture<ReportChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportChargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
