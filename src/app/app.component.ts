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
}
