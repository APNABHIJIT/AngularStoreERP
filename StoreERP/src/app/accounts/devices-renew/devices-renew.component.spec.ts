import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesRenewComponent } from './devices-renew.component';

describe('DevicesRenewComponent', () => {
  let component: DevicesRenewComponent;
  let fixture: ComponentFixture<DevicesRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
