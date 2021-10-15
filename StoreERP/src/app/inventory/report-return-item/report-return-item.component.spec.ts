import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReturnItemComponent } from './report-return-item.component';

describe('ReportReturnItemComponent', () => {
  let component: ReportReturnItemComponent;
  let fixture: ComponentFixture<ReportReturnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReturnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReturnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
