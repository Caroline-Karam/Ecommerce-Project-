import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CuttextPipe } from '../../cuttext.pipe';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CuttextPipe, RouterLink, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}

  cartDetails: any = {};

  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
      },
    });
  }
}
