import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeEventsComponent } from './some-events.component';

describe('SomeEventsComponent', () => {
  let component: SomeEventsComponent;
  let fixture: ComponentFixture<SomeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
