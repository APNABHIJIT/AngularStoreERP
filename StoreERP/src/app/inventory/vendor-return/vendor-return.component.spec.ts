import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorReturnComponent } from './vendor-return.component';

describe('VendorReturnComponent', () => {
  let component: VendorReturnComponent;
  let fixture: ComponentFixture<VendorReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
