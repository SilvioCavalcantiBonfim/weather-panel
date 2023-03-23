import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GeolocationService } from '../service/geolocation.service';

@Component({
  selector: 'app-sum-time',
  templateUrl: './sum-time.component.html',
  styleUrls: ['./sum-time.component.css']
})
export class SumTimeComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  interval: any;

  constructor(public geolocation: GeolocationService){}

  get percentageDay(): number{
    if(this.geolocation.Suntime.sunrise !== null && this.geolocation.Suntime.sunset !== null){
      var rt = 1 - (this.geolocation.Suntime.sunset.getTime() - this.currentTime.getTime())/(this.geolocation.Suntime.sunset.getTime() - this.geolocation.Suntime.sunrise.getTime()); 
      if(rt > 1) rt = 1;
      if(rt < 0) rt = 0;
      return  rt;
    }
    return 0;
  }

  ngOnInit(): void{
    this.interval = setInterval(() => this.currentTime = new Date(), 1000);
  }

  get inLoading(): boolean{
    return this.geolocation.Suntime.sunrise === null || this.geolocation.Suntime.sunset === null;
  }

  get microSunPosition(): number[]{
    var _x = this.percentageDay*245;
    if(_x > 230) _x = 230;
    if(_x < 14) _x = 14;
    return [_x,121.5 - Math.sqrt(11664 - Math.pow(_x-122,2))];
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
