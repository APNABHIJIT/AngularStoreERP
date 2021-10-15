import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryVendorsComponent } from './inventory-vendors.component';

describe('InventoryVendorsComponent', () => {
  let component: InventoryVendorsComponent;
  let fixture: ComponentFixture<InventoryVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryVendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
