import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { CommonModule } from '@angular/common';
import { CuttextPipe } from '../../cuttext.pipe';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe ,RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private _ProductsService : ProductsService){  }

productData: any[] = [];

  ngOnInit(): void {
      this._ProductsService.getProducts().subscribe({
        next:(Response)=>{
          console.log(Response.data);
          this.productData = Response.data;

        },
        error:(err)=>{
          console.log(err);

        }
      })
  }
}
