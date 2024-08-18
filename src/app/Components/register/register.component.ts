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
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  errMsg: string = '';
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  handleForm(): void {
    this.isLoading = true;
    const userData = this.registerForm.value;

    if (this.registerForm.valid == true) {
      // console.log(this.registerForm.value);

      this._AuthService.register(userData).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            // login
            this._Router.navigate(['/login']);
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
