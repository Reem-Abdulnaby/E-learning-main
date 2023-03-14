import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRateComponent } from './avg-rate.component';

describe('AvgRateComponent', () => {
  let component: AvgRateComponent;
  let fixture: ComponentFixture<AvgRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
