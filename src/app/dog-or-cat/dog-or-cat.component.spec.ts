import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogOrCatComponent } from './dog-or-cat.component';

describe('DogOrCatComponent', () => {
  let component: DogOrCatComponent;
  let fixture: ComponentFixture<DogOrCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogOrCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogOrCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
