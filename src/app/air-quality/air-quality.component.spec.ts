import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityComponent } from './air-quality.component';

describe('AirQualityComponent', () => {
  let component: AirQualityComponent;
  let fixture: ComponentFixture<AirQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
