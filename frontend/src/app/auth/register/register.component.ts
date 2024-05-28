import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" formControlName="name" required />
      </div>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          formControlName="password"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  `,
  styles: [],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const name = this.registerForm.value.name;
      const username = this.registerForm.value.username;
      const password = this.registerForm.value.password;
      // Perform registration logic here
      console.log('Name:', name);
      console.log('Username:', username);
      console.log('Password:', password);
      this.authService.register(username, password, name).subscribe(
        (response) => {
          console.log('Registration successful:', response);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
