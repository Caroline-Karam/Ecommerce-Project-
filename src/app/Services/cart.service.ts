import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient : HttpClient) {}

  myToken: any = {
    token: localStorage.getItem('_token')
  }

  addToCartItem(prodId : string): Observable<any> {
    return this._HttpClient.post<any>(`https://ecommerce.routemisr.com/api/v1/cart` ,
      {
        productId: prodId
      },
      {
        headers : this.myToken,
      }
    );
  }

  getCartUser(): Observable<any>{
    return this._HttpClient.get<any>(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers : this.myToken,
      }
    )
  }
}
