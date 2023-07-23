import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { CartMiddlewareService } from 'src/app/shared/service/cart-middleware.service';
import { ProductoService } from 'src/app/shared/service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: any = [];

  // Carrito de compras (inicialmente vacío)
  cartItems: any[] = [];

  // Variable para mostrar u ocultar el carrito
  showCart = true;

  constructor(
    private service: ProductoService,
    private router: Router,
    private middleware: CartMiddlewareService,
    private snackBar: MatSnackBar
  ) {
    this.readProduct();
  }

  readProduct() {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  callAddProduct(product: Product) {
    this.middleware.callAddProduct(product);
    this.snackBar.open('Producto agregado al carrito', 'Cerrar', {
      duration: 1000,
      verticalPosition: 'top'
    });
    product.cantidad_compra = 0;
  }

  setDefaultQuantity(product: any) {
    if (product.cantidad_compra === undefined) {
      product.cantidad_compra = 0; 
    }
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }
}
