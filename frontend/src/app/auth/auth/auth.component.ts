import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  template: `
    <div class="container">
      <div class="auth-container">
        <ul class="nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link"
              [class.active]="activeTab === 'login'"
              (click)="activeTab = 'login'"
              >Войти</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              [class.active]="activeTab === 'register'"
              (click)="activeTab = 'register'"
              >Регистрация</a
            >
          </li>
        </ul>
        <div class="tab-content">
          <div *ngIf="activeTab === 'login'">
            <app-login></app-login>
          </div>
          <div *ngIf="activeTab === 'register'">
            <app-register></app-register>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        color: white;
        // background-color: #ff6600;
        padding: 20px;
        // border-radius: 10px;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(180deg, #fa5a00 0%, #530000 100%);
        overflow: hidden;
      }
      .auth-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(180deg, #fa5a00 0%, #530000 100%);
        color: #fff;
        padding: 20px;
        border-radius: 10px;
        width: 400px;
        margin: 0 auto;
      }

      .nav-tabs {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 1rem;
        list-style-type: none;
        padding: 0;
      }

      .nav-item {
        flex: 1;
      }

      .nav-link {
        display: block;
        text-align: center;
        padding: 10px;
        cursor: pointer;
        background-color: #ff9900;
        border-radius: 5px;
        color: #fff;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        text-decoration: none;
      }

      .nav-link.active {
        background-color: #530000;
      }

      .tab-content {
        width: 100%;
      }
    `,
  ],
  imports: [CommonModule, LoginComponent, RegisterComponent],
})
export class AuthComponent {
  activeTab: string = 'login';
}
