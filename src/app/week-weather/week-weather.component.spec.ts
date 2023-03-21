import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekWeatherComponent } from './week-weather.component';

describe('WeekWeatherComponent', () => {
  let component: WeekWeatherComponent;
  let fixture: ComponentFixture<WeekWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
