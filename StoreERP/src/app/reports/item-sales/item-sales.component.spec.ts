import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSalesComponent } from './item-sales.component';

describe('ItemSalesComponent', () => {
  let component: ItemSalesComponent;
  let fixture: ComponentFixture<ItemSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
