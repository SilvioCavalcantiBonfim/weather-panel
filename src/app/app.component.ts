import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './service/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-panel';

  location: any = {latitude: 0, longitude: 0}

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    // console.log(this.geo.isEnabled)
    // this.geo.location.getCurrentPosition((position: any): void => {
    //   this.location = {latitude: position.coords.latitude, longitude: position.coords.longitude};
    //   const URL = `https://api.open-meteo.com/v1/forecast?latitude=${this.location.latitude}&longitude=${this.location.longitude}&timezone=GMT&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min`
    //   // this.http.get<any>(URL).subscribe({next: (r) => {
    //   //   console.log(r)
    //   // }})
    // })
  }
}
