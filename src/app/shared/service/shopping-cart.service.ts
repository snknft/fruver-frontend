import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getShoppingCarts() {
    return this.http.get<ShoppingCart[]>(`${this.BASE_URL}/carroCompras`);
  }
  getShoppingCart(id: string) {
    return this.http.get<ShoppingCart>(
      `${this.BASE_URL}/carroCompras/${id}`
    );
  }
  createShoppingCart(shoppingCart: ShoppingCart) {
    return this.http.post<string>(`${this.BASE_URL}/carroCompras`, shoppingCart);
  }
  updateShoppingCart(shoppingCart: ShoppingCart) {
    return this.http.put<string>(`${this.BASE_URL}/carroCompras`, shoppingCart);
  }
  removeShoppingCart(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/carroCompras/${id}`);
  }
}
