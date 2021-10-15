import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGenerateComponent } from './app-generate.component';

describe('AppGenerateComponent', () => {
  let component: AppGenerateComponent;
  let fixture: ComponentFixture<AppGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
