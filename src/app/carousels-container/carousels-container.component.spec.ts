import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsContainerComponent } from './carousels-container.component';

describe('CarouselsContainerComponent', () => {
  let component: CarouselsContainerComponent;
  let fixture: ComponentFixture<CarouselsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
