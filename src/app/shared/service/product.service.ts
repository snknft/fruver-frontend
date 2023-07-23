import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.BASE_URL}/productos`);
  }
  getProduct(idProducto: number) {
    return this.http.get<Product>(
      `${this.BASE_URL}/productos/${idProducto}`
    );
  }
  createProduct(producto: Product) {
    return this.http.post<string>(`${this.BASE_URL}/productos`, producto);
  }
  updateProduct(producto: Product) {
    return this.http.put<string>(`${this.BASE_URL}/productos`, producto);
  }
  removeProduct(idProducto: string) {
    return this.http.delete<string>(`${this.BASE_URL}/productos/${idProducto}`);
  }
}
