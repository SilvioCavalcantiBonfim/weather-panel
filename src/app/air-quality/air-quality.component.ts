import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent {
  @Input() values: number[] = [12.9, 12.9, 2.1, 21.2, 0.7]
  molecules: string[] = ['PM2.5', 'PM10', 'SO₂', 'O₃', 'CO']

  public limits: any = [
    [25, 50, 75, 125],
    [50, 100, 150, 250],
    [20, 40, 365, 800],
    [100, 130, 160, 200],
    [10000, 13000, 15000, 17000]
  ];

  public color: any = [
    "#87EBCD",
    "#e1eb87",
    "#ebc887",
    "#eb8787",
    "#eb87eb"
  ]

  public compare (v: number, limit: number[]): number{
    return Number(v > limit[0])+Number(v > limit[1])+Number(v > limit[2])+Number(v > limit[3]);
  }
}
