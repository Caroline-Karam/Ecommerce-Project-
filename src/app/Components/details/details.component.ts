import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService: ProductsService){}

  productDetails: any = {};


  productId:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
    this.productId = params.get('id');
    }
  });

  this._ProductsService.getProductId(this.productId).subscribe({
    next:(response)=>{
   this.productDetails = response.data;

    }
  })

  }
}
