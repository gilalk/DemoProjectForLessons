import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMeterComponent } from './temp-meter.component';

describe('TempMeterComponent', () => {
  let component: TempMeterComponent;
  let fixture: ComponentFixture<TempMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
