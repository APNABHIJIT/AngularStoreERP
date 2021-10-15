import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceCategoryComponent } from './item-price-category.component';

describe('ItemPriceCategoryComponent', () => {
  let component: ItemPriceCategoryComponent;
  let fixture: ComponentFixture<ItemPriceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPriceCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
