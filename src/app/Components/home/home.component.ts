import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { CommonModule } from '@angular/common';
import { CuttextPipe } from '../../cuttext.pipe';
import { RouterLink, RouterModule } from '@angular/router';
import { Category } from '../../Interfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from "../../search.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CuttextPipe,
    RouterLink,
    RouterModule,
    CarouselModule,
    SearchPipe,
    FormsModule,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}

  productData: any[] = [];
  categoryData: Category[] = [];
  term : string = '';

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (Response) => {
        console.log(Response.data);
        this.productData = Response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ProductsService.getCategories().subscribe({
      next: (response) => {
        console.log(response.data);
        this.categoryData = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 1000,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['', ''],
    items: 1,
    nav: false,
  };

  addProduct(id: string): void {
    this._CartService.addToCartItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this._CartService.cartNumber.next(response.numOfCartItems);

        this._ToastrService.success(response.message);
      },
    });
  }
}
