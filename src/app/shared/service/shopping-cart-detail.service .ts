import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCartDetail } from '../model/shopping-cart-detail.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartDetailService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getShoppingCartDetails() {
    return this.http.get<ShoppingCartDetail[]>(`${this.BASE_URL}/carroComprasProductos`);
  }
  getShoppingCartDetail(id: string) {
    return this.http.get<ShoppingCartDetail>(
      `${this.BASE_URL}/carroComprasProductos/${id}`
    );
  }
  findCompraDetalle(carrro_compras_id: string) {
    return this.http.get<ShoppingCartDetail[]>(
      `${this.BASE_URL}/carroComprasProductos/detalle/${carrro_compras_id}}`
    );
  }
  createShoppingCartDetail(shoppingCartDetail: ShoppingCartDetail) {
    return this.http.post<string>(`${this.BASE_URL}/carroComprasProductos`, shoppingCartDetail);
  }
  updateShoppingCartDetail(shoppingCartDetail: ShoppingCartDetail) {
    return this.http.put<string>(`${this.BASE_URL}/carroComprasProductos`, shoppingCartDetail);
  }
  removeShoppingCartDetail(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/carroComprasProductos/${id}`);
  }
}
