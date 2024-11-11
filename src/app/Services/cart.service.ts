import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient : HttpClient) {}
   
  cartNumber : BehaviorSubject<number> = new BehaviorSubject(0);

  addToCartItem(prodId : string): Observable<any> {
    return this._HttpClient.post<any>(`https://ecommerce.routemisr.com/api/v1/cart` ,
      {
        productId: prodId
      },
      
    );
  }

  getCartUser(): Observable<any>{
    return this._HttpClient.get<any>(`https://ecommerce.routemisr.com/api/v1/cart`)
  }

  removecartItem(prodId: string): Observable<any> {
    return this._HttpClient.delete<any>(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`)
  }

  updateCount(id: string , countNum : number) : Observable<any>{
    return this._HttpClient.put<any>(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: countNum
      }
    )
  }

  checkOut(cart_id: string , orderDetails: object): Observable<any> {
    return this._HttpClient.post<any>(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart_id}?url=http://localhost:4200`,
      {
        shippingAddress: orderDetails
    }
    )
  }
}
