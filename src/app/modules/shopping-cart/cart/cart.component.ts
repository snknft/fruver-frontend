import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterCartProductsPipe } from 'src/app/shared/pipes/filter-cart-products-pipe';
import { Product } from 'src/app/shared/model/product.model';
import { ShoppingCartDetail } from 'src/app/shared/model/shopping-cart-detail.model';
import { ShoppingCart } from 'src/app/shared/model/shopping-cart.model';
import { CartMiddlewareService } from 'src/app/shared/service/cart-middleware.service';
import { SessionService } from 'src/app/shared/service/session.service';
import { ShoppingCartDetailService } from 'src/app/shared/service/shopping-cart-detail.service ';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';
import { ProductoService } from 'src/app/shared/service/product.service';
import { InvoiceService } from 'src/app/shared/service/invoice.service';
import { Invoice } from 'src/app/shared/model/invoice.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ShoppingCartDetail[] = [];
  shoppingCartDetail!: ShoppingCartDetail;
  showCart = true;
  filter!: string;

  cart!: ShoppingCart;

  private subscription: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(
    private middleware: CartMiddlewareService,
    private cartService: ShoppingCartService,
    private detailService: ShoppingCartDetailService,
    private sessionService: SessionService,
    private productService: ProductoService,
    private invoiceService: InvoiceService,
    //private router: Router
  ) {
    this.subscription = this.middleware.calledAddProduct$.subscribe((data) => {
      this.addProduct(data);
    });
  }

  ngOnInit(): void {
    this.filter = '';
    if (this.sessionService.isLogged()) {
      let cliente_id = this.sessionService.getSession().id;
      this.cart = new ShoppingCart('', parseInt(cliente_id), 'P');

      this.cartService
        .findShoppingCart(this.cart.cliente_id, this.cart.estado)
        .subscribe((data) => {
          if (data) {
            console.log('Carrito cargado');
            this.cart = data;
            console.log(this.cart);
            this.detailService.findCompraDetalle(this.cart.id).subscribe((data) => {
              this.cartItems = data;
              this.cartItems.forEach(element => {
                this.productService.getProduct(element.producto_id).subscribe((data) => {
                  element.product = data;
                });
              });
              console.log(this.cartItems);
            });
          } else {
            this.cartService.createShoppingCart(this.cart).subscribe(
              (data) => {
                console.log('Carrito creado');
              },
              (error) => {
                console.log(error);
              }
            );
          }
        });
    }
  }

  addProduct(product: Product) {
    const existingProduct = this.cartItems.find(
      (item) => item.producto_id === parseInt(product.id)
    );

    if (existingProduct) {
      // actualizar cantidad
      existingProduct.cantidad_producto += product.cantidad_compra || 0;

      this.detailService.updateShoppingCartDetail(existingProduct).subscribe(
        (data) => {
          console.log('Producto agregado al carro');
        },
        (error) => {
          console.log(error);
        }
      );

    } else {
      // agregar producto
      this.shoppingCartDetail = new ShoppingCartDetail(
        '',
        parseInt(this.cart.id),
        parseInt(product.id),
        product.cantidad_compra || 0,
        product
      );
      this.cartItems.push({ ...this.shoppingCartDetail });
      this.detailService.createShoppingCartDetail(this.shoppingCartDetail).subscribe(
        (data) => {
          console.log('Producto agregado al carro');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  removeProduct(shoppingCartDetail: ShoppingCartDetail) {
    const index = this.cartItems.indexOf(shoppingCartDetail);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }

    this.detailService.removeShoppingCartDetail(shoppingCartDetail.id).subscribe(
      (data) => {
        console.log('Producto removido del carro');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTotal(): number {
    let totalMount = 0;
    this.cartItems.forEach(element => {
      if (element.product) {
        totalMount += parseInt(element.product.valor_unitario || 0) *
        element.cantidad_producto;
      }     
    });
    return totalMount;
    /*
    return this.cartItems.reduce(
      (total: number, shoppingCartDetail) => 
        total +
        parseInt(shoppingCartDetail.product.valor_unitario || 0) *
          shoppingCartDetail.cantidad_producto,
      0
    );
    */
  }

  checkout() {

    if (
      window.confirm(`Está seguro de finalizar la compra?`)
    ) {

      let invoice: Invoice = new Invoice('', this.cart.id);
      console.log(invoice);
      this.invoiceService.createInvoice(invoice).subscribe(
        (data) => {
          console.log('Factura Creada');
          //this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
