import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {
  @Input() icon: number = 0;
  @Input() title: string = 'Vento';
  @Input() value: number = 10;
  @Input() unit: string = 'km/h';
}
