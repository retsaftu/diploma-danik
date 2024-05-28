import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  template: `
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link"
            [class.active]="activeTab === 'login'"
            (click)="activeTab = 'login'"
            >Login</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            [class.active]="activeTab === 'register'"
            (click)="activeTab = 'register'"
            >Register</a
          >
        </li>
      </ul>
      <div class="tab-content">
        <div *ngIf="activeTab === 'login'">
          <app-login></app-login>
        </div>
        <div *ngIf="activeTab === 'register'">
          <app-register></app-register>
          <!-- Add your register form here -->
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .nav-tabs {
        margin-bottom: 1rem;
      }
    `,
  ],
  imports: [CommonModule, LoginComponent, RegisterComponent],
})
export class AuthComponent {
  activeTab: string = 'login';
}
