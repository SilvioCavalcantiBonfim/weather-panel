import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinate, SunTime, Temperature } from './geolocation.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService{

  private coordinates: Coordinate = {latitude: null, longitude: null};
  private temperature: Temperature = {current: [], min: [], max: []};
  private suntime: SunTime = {sunrise: null, sunset: null};
  private precipitation: number = 0;
  private windSpeed: number = 0;
  private humidity: number[] = [];
  private types: number[] = [];

  constructor(private http: HttpClient) {
    this.update();
  }

  public update(): void{
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.coordinates = {latitude: position.coords.latitude, longitude: position.coords.longitude};
        this.http.get<any>(`https://api.open-meteo.com/v1/forecast
?latitude=${this.coordinates.latitude}
&longitude=${this.coordinates.longitude}
&hourly=temperature_2m,relativehumidity_2m
&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max
&current_weather=true
&forecast_days=6
&timezone=auto`)
        .subscribe({
          next: (r: any) => {
            this.temperature = {current: r.hourly.temperature_2m, min: r.daily.temperature_2m_min, max: r.daily.temperature_2m_max};
            this.suntime = {sunrise: new Date(r.daily.sunrise[0]), sunset: new Date(r.daily.sunset[0])};
            this.precipitation = r.daily.precipitation_probability_max[0];
            this.types = r.daily.precipitation_probability_max.map((e: any) => {
              return Number(e > 20)+Number(e > 40)+Number(e > 60)+Number(e > 80);
            });
            this.windSpeed = r.daily.windspeed_10m_max[0];
            this.humidity = r.hourly.relativehumidity_2m;
          }
        })
      });
  }

  
  public get IconPreciptation(): number[]{
    return this.types;
  }

  public get Temperatures() : Temperature {
    return this.temperature;
  }
  
  public get Precipitation(): number{
    return this.precipitation;
  }

  public get Windspeed(): number{
    return this.windSpeed;
  }

  public get Humidity(): number[]{
    return this.humidity;
  }

  get Suntime(): SunTime{
    return this.suntime;
  }

  get inLoading(): boolean{
    return this.coordinates.latitude === null || this.coordinates.longitude === null || this.temperature.max.length === 0;
  }

  get position(): Coordinate{
    return this.coordinates;
  }
}
