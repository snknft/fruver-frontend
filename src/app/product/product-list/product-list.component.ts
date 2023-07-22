import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any = [];

  // Carrito de compras (inicialmente vacío)
  cartItems: any[] = [];

  constructor(private service: ProductoService, private router: Router) {
    this.readProduct();
  }

  readProduct() {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any): void {
    // Verificar si el producto ya está en el carrito
    const existingProduct = this.cartItems.find((item) => item.name === product.name);

    if (existingProduct) {
      // Si el producto ya está en el carrito, solo actualizamos la cantidad
      existingProduct.quantity += product.quantity;
    } else {
      // Si el producto no está en el carrito, lo agregamos
      this.cartItems.push({ ...product });
    }

    // Reiniciamos la cantidad del producto seleccionado
    product.quantity = 0;
  }
}