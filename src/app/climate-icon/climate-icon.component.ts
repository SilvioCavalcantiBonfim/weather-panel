import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-climate-icon',
  templateUrl: './climate-icon.component.html',
  styleUrls: ['./climate-icon.component.css']
})
export class ClimateIconComponent {
  @Input() type: number = 0;
  @Input() size: number = 64;
}
