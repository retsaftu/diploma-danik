import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password" />
      </div>
      <button (click)="login()">Login</button>
    </form>
  `,
  styles: [],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    // Implement your login logic here
    console.log('Username:', this.loginForm.value.username);
    console.log('Password:', this.loginForm.value.password);
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (response) => {
          console.log('Login successful:', response);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
}
