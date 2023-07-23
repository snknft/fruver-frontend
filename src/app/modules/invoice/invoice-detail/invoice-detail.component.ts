import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/shared/model/invoice.model';
import { ShoppingCartDetail } from 'src/app/shared/model/shopping-cart-detail.model';
import { InvoiceService } from 'src/app/shared/service/invoice.service';
import { ProductoService } from 'src/app/shared/service/product.service';
import { ShoppingCartDetailService } from 'src/app/shared/service/shopping-cart-detail.service ';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit{
  invoice: any;
  details: ShoppingCartDetail[] = [];
  id = '';

  constructor(
    private invoiceService: InvoiceService,
    private detailService: ShoppingCartDetailService,
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      //Editar
      this.invoiceService.getInvoice(this.id).subscribe(data => {
        this.invoice = data;
        this.invoiceDetail(this.invoice);
      });
    }
  }  

  invoiceDetail(invoice: Invoice){
    this.detailService.findCompraDetalle(invoice.carro_compras_id).subscribe((data) => {
      data.forEach(detail => {
        this.productoService.getProduct(detail.producto_id).subscribe((product) => {
            detail.product = product;
        });
      });
      this.details = data;
    });
  }

  getTotal(): number {
    let total = 0;
    for (const detail of this.details) {
      total += detail.product.valor_unitario * detail.cantidad_producto;
    }
    return total;
  }

  toList(){
    this.router.navigate(['/']);
  }

}
