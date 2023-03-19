import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {}

  get location(): any{
    return navigator.geolocation;
  }

  get isEnabled(): boolean{
    return Boolean(navigator.geolocation);
  }
}
