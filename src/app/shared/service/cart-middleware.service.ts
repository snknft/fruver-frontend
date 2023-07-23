import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartMiddlewareService {
  // Subject para enviar eventos y datos entre componentes
  private addProduct = new Subject<any>();
  calledAddProduct$ = this.addProduct.asObservable();

  constructor() { }

  callAddProduct(data: any) {
    this.addProduct.next(data);
  }
}
