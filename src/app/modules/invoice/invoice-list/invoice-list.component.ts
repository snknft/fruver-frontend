import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/shared/model/invoice.model';
import { InvoiceService } from 'src/app/shared/service/invoice.service';
import { ProductoService } from 'src/app/shared/service/product.service';
import { ShoppingCartDetailService } from 'src/app/shared/service/shopping-cart-detail.service ';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
})
export class InvoiceListComponent {
  invoices: any = [];

  constructor(
    private invoiceService: InvoiceService,
    private cartService: ShoppingCartService,
    private userService: UserService,
    private router: Router
  ) {
    this.readInvoice();
  }

  ngOnInit() {}

  readInvoice() {
    this.invoiceService.getInvoices().subscribe((data) => {
      this.invoices = data;
      this.invoices.forEach((element: Invoice) => {
        this.cartService.getShoppingCart(element.carro_compras_id).subscribe((cart) => {
          this.userService.getUser(cart.cliente_id).subscribe((client) => {
            element.client = client;
          });
        });
      });
    });
  }

  toDetails(invoice: { id: string; }){
    this.router.navigate([`invoice/detail/${invoice.id}`]);
  }

}
