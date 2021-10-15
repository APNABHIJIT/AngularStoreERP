import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterLabelsComponent } from './printer-labels.component';

describe('PrinterLabelsComponent', () => {
  let component: PrinterLabelsComponent;
  let fixture: ComponentFixture<PrinterLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
