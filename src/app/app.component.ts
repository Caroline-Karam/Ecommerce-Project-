import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAuthComponent } from './Components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './Components/navbar-blank/navbar-blank.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarAuthComponent,
    NavbarBlankComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    FooterComponent,
    ReactiveFormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ecommerce_Project';
}
