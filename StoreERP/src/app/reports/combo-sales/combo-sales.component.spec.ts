import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboSalesComponent } from './combo-sales.component';

describe('ComboSalesComponent', () => {
  let component: ComboSalesComponent;
  let fixture: ComponentFixture<ComboSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
