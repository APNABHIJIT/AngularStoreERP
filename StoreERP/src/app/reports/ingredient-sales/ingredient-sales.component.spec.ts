import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientSalesComponent } from './ingredient-sales.component';

describe('IngredientSalesComponent', () => {
  let component: IngredientSalesComponent;
  let fixture: ComponentFixture<IngredientSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
