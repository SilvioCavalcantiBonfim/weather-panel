import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureNowComponent } from './temperature-now/temperature-now.component';
import { StatisticComponent } from './temperature-now/statistic/statistic.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { SumTimeComponent } from './sum-time/sum-time.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';
import { DayComponent } from './week-weather/day/day.component';
import { ClimateIconComponent } from './climate-icon/climate-icon.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureNowComponent,
    StatisticComponent,
    AirQualityComponent,
    SumTimeComponent,
    WeekWeatherComponent,
    DayComponent,
    ClimateIconComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
