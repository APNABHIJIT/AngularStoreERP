import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsCreditsComponent } from './vendors-credits.component';

describe('VendorsCreditsComponent', () => {
  let component: VendorsCreditsComponent;
  let fixture: ComponentFixture<VendorsCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
