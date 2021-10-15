import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSalesComponent } from './location-sales.component';

describe('LocationSalesComponent', () => {
  let component: LocationSalesComponent;
  let fixture: ComponentFixture<LocationSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
