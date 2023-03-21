import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent {
  @Input() values: number[] = [12.9, 12.9, 2.1, 21.2, 0.7]
  molecules: string[] = ['PM2.5', 'PM10', 'SO₂', 'O₂', 'CO']
}
