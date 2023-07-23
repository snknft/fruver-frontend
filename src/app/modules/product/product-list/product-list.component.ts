import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { CartMiddlewareService } from 'src/app/shared/service/cart-middleware.service';
import { ProductoService } from 'src/app/shared/service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  products: any = [];

  // Carrito de compras (inicialmente vacío)
  cartItems: any[] = [];

  // Variable para mostrar u ocultar el carrito
  showCart = true;
  filter!: string;

  constructor(
    private service: ProductoService,
    private router: Router,
    private middleware: CartMiddlewareService,
    private snackBar: MatSnackBar,
    private sessionService: SessionService
  ) {
    this.readProduct();
  }
  ngOnInit(): void {
    this.filter = '';
  }

  readProduct() {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  callAddProduct(product: Product) {
    if (this.sessionService.isLogged() && this.sessionService.getSession().tipo == 'C') {
      if (product.cantidad_compra != 0) {
        this.middleware.callAddProduct(product);
        this.snackBar.open('Producto agregado al carrito', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'top',
        });
        product.cantidad_compra = 0;
      }
      else{
        this.snackBar.open('La cantidad debe ser mayor a uno', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'top',
        });
      }
    }
    else{
      this.snackBar.open('Ingrese como cliente para usar el carrito', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'top',
      });
    }

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
