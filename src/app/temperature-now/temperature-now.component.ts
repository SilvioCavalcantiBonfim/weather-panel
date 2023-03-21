import { Component } from '@angular/core';
import { GeolocationService } from '../service/geolocation.service';

@Component({
  selector: 'app-temperature-now',
  templateUrl: './temperature-now.component.html',
  styleUrls: ['./temperature-now.component.css']
})
export class TemperatureNowComponent {
  constructor(public geolocation: GeolocationService){}

  get isLoading(): boolean{
    return this.geolocation.position.latitude === null || this.geolocation.position.longitude === null;
  }
}
