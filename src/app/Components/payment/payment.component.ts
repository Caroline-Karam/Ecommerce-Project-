import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {

constructor(private _ActivatedRoute :ActivatedRoute , private _CartService: CartService){}

cartId : any;

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (params)=>{
        this.cartId = params.get('id')
    }
  })
}
  orderForm : FormGroup = new FormGroup({
     details : new FormControl (''),
     phone : new FormControl (''),
     city : new FormControl ('')
  })

  handleForm(): void{
    const cartDetails = this.orderForm.value
    this._CartService.checkOut(this.cartId, cartDetails).subscribe({
      next:(response)=>{
        // console.log(response);
        window.open(response.session.url, "_self")
      }
    })
  }
}
