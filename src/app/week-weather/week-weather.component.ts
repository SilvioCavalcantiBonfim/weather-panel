import { Component } from '@angular/core';
import { GeolocationService } from '../service/geolocation.service';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css']
})
export class WeekWeatherComponent {
  nameDay: string[] = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

  constructor(public geolocation: GeolocationService){}

  get day(): number{
    return (new Date()).getDay();
  }
}
