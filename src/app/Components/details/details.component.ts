import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { CommonModule } from '@angular/common';
import { CuttextPipe } from '../../cuttext.pipe';
import { CartService } from '../../Services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CuttextPipe, RouterLink, RouterModule, ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}

  productDetails: any = {};

  productId: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
      },
    });

    this._ProductsService.getProductId(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response.data;
      },
    });
  }



  addProduct(id: string): void {
    this._CartService.addToCartItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
      },
    });
  }
}
