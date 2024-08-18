import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-blank',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar-blank.component.html',
  styleUrl: './navbar-blank.component.scss'
})
export class NavbarBlankComponent {

constructor(private _Router: Router){}

  signOut():void{
    localStorage.removeItem('_token');
    this._Router.navigate(['/login'])
  }
}
