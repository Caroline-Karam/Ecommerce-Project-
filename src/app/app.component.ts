import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAuthComponent } from './Components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './Components/navbar-blank/navbar-blank.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

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
    CommonModule,
    CarouselModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ecommerce_Project';
}
