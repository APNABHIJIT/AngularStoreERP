import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotItemsComponent } from './kot-items.component';

describe('KotItemsComponent', () => {
  let component: KotItemsComponent;
  let fixture: ComponentFixture<KotItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
