import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeolocationService } from '../service/geolocation.service';

@Component({
  selector: 'app-sum-time',
  templateUrl: './sum-time.component.html',
  styleUrls: ['./sum-time.component.css']
})
export class SumTimeComponent implements OnInit, OnDestroy {
  sunrise: Date = new Date('2023-03-20T05:22');
  sunset: Date = new Date('2023-03-20T17:31');
  currentTime: Date = new Date();
  interval: any;

  constructor(public geolocation: GeolocationService){}

  get percentageDay(): number{
    if(this.currentTime.getTime() < this.sunset.getTime() && this.currentTime.getTime() > this.sunrise.getTime())
      return 1-(this.sunset.getTime() - this.currentTime.getTime())/(this.sunset.getTime() - this.sunrise.getTime())
    else
      return 0;
  }

  ngOnInit(): void{
    this.interval = setInterval(() => this.currentTime = new Date(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
