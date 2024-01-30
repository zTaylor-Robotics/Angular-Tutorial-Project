import { Component, Input } from '@angular/core';
import { HomeComponent } from './home/home.component'
import { LogosvgComponent } from './logosvg/logosvg.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    LogosvgComponent,
    RouterModule,
    ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name" 
          (mouseenter)="onMouseEnter()" 
          (mouseleave)="onMouseLeave()">
          <app-logosvg [color]="svgColor"></app-logosvg>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  svgColor = '#605DC8';

  onMouseEnter(){
    this.svgColor = '#8B89E6';
  }
  onMouseLeave(){
    this.svgColor = '#605DC8';
  }
}
