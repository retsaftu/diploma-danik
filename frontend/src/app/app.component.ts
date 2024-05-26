import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './main/feature/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-home-page></app-home-page>
    <!--The content below is only a placeholder and can be replaced.-->

    <router-outlet></router-outlet>
  `,
  styles: [],
  imports: [CommonModule, RouterOutlet, HomePageComponent],
})
export class AppComponent {
  title = 'frontend';
}
