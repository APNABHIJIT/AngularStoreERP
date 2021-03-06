import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersComponent } from './bulk-orders.component';

describe('BulkOrdersComponent', () => {
  let component: BulkOrdersComponent;
  let fixture: ComponentFixture<BulkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
