import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';
import { ShoppingCartDetail } from 'src/app/shared/model/shopping-cart-detail.model';
import { CartMiddlewareService } from 'src/app/shared/service/cart-middleware.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: ShoppingCartDetail[] = [];
  shoppingCartDetail!: ShoppingCartDetail;
  showCart = true;

  private subscription: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private middleware: CartMiddlewareService) {
    this.subscription = this.middleware.calledAddProduct$.subscribe((data) => {
      this.addProduct(data);
    });
  }

  addProduct(product: Product) {
    const existingProduct = this.cartItems.find(
      (item) => item.producto_id === parseInt(product.id)
    );

    if (existingProduct) {
      // actualizar cantidad
      existingProduct.cantidad_producto += product.cantidad_compra || 0;
    } else {
      // agregar producto
      this.shoppingCartDetail = new ShoppingCartDetail('', 0, parseInt(product.id), product.cantidad_compra || 0, product);
      this.cartItems.push({ ...this.shoppingCartDetail });
    }
  }

  removeProduct(shoppingCartDetail: ShoppingCartDetail) {
    const index = this.cartItems.indexOf(shoppingCartDetail);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total: number, shoppingCartDetail) => total + parseInt(shoppingCartDetail.product.valor_unitario) * shoppingCartDetail.cantidad_producto, 0);
  }

  checkout() {
    
  }
}
