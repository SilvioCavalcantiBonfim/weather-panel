import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinate, SunTime, Temperature } from './geolocation.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService{

  private coordinates: Coordinate = {latitude: null, longitude: null};
  private temperature: Temperature = {current: [], min: null, max: null};
  private suntime: SunTime = {sunrise: null, sunset: null};

  constructor(private http: HttpClient) {
    this.update();
  }

  public update(): void{
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.coordinates = {latitude: position.coords.latitude, longitude: position.coords.longitude};
        this.http.get<any>(`https://api.open-meteo.com/v1/forecast?latitude=${this.coordinates.latitude}&longitude=${this.coordinates.longitude}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max&current_weather=true&forecast_days=1&timezone=auto`)
        .subscribe({
          next: (r: any) => {
            this.temperature = {current: Object.values(r.hourly.temperature_2m), min: r.daily.temperature_2m_min[0], max: r.daily.temperature_2m_max[0]};
            this.suntime = {sunrise: new Date(r.daily.sunrise), sunset: new Date(r.daily.sunset)};
          }
        })
      });
  }

  get Suntime(): SunTime{
    return this.suntime;
  }

  get inLoading(): boolean{
    return this.coordinates.latitude === null || this.coordinates.longitude === null;
  }

  get position(): Coordinate{
    return this.coordinates;
  }
}
