import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  errMsg: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });

  handleForm(): void {
    this.isLoading = true;
    const userData = this.loginForm.value;

    if (this.loginForm.valid == true) {
      // console.log(this.loginForm.value);

      this._AuthService.login(userData).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            // login
            localStorage.setItem('_token', response.token);
            this._Router.navigate(['/home']);
            this.isLoading = false;
          }
        },
        error: (err) => {
          this.errMsg = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }
}
