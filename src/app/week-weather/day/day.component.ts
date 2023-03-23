import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() type: number = 0;
  @Input() title: string | undefined = 'Amanhã';
  @Input() variant: number[] | null = null;
}
