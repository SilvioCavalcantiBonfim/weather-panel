import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './service/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'weather-panel';
  constructor(public geolocation: GeolocationService){}

  
  public get valueAirquality() : number[] {
    const currentDate: Date = new Date();
    return (this.geolocation.airQuality === null)?[]:[
      this.geolocation.airQuality.pm2_5[currentDate.getHours()],
      this.geolocation.airQuality.pm10[currentDate.getHours()],
      this.geolocation.airQuality.sulphur_dioxide[currentDate.getHours()],
      this.geolocation.airQuality.nitrogen_dioxide[currentDate.getHours()],
      this.geolocation.airQuality.carbon_monoxide[currentDate.getHours()]
    ]; 
  }
  
}
