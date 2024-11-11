import { Component, OnInit, Renderer2 } from '@angular/core';
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
  constructor(private _CartService: CartService , private _Renderer2: Renderer2) {}

  cartDetails: any = {};

  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
      },
    });
  }

  removeProduct(id: string): void {
    this._CartService.removecartItem(id).subscribe({
      next: (response) => {
        this._CartService.cartNumber.next(response.numOfCartItems)
        this.cartDetails = response.data;
      },
    });
  }

  changeCount(
    count: number,
    id: string,
    ele1: HTMLButtonElement,
    ele2: HTMLButtonElement
  ): void {
    if (count >= 1) {

    this._Renderer2.setAttribute(ele1 , 'disabled' , 'true');
    this._Renderer2.setAttribute(ele2 , 'disabled' , 'true');


      this._CartService.updateCount(id, count).subscribe({
        next: (response) => {
          this.cartDetails = response.data;
          this._Renderer2.removeAttribute(ele1 , 'disabled');
          this._Renderer2.removeAttribute(ele2 , 'disabled');
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(ele1 , 'disabled');
          this._Renderer2.removeAttribute(ele2 , 'disabled');
        },

      });
    }
  }
}
