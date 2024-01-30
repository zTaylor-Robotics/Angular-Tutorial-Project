import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logosvg',
  standalone: true,
  templateUrl: './logosvg.component.svg',
  styleUrl: './logosvg.component.css'
})
export class LogosvgComponent {
  @Input() color = '';

  constructor() {}
}
