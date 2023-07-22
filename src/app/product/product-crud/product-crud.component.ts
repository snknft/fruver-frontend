import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
})
export class ProductCrudComponent implements OnInit {
  Product: any = [];

  constructor(private service: ProductoService, private router: Router) {
    this.readProduct();
  }

  ngOnInit() {}

  createProduct() {
    this.router.navigate(['/create']);
  }

  readProduct() {
    this.service.getProducts().subscribe((data) => {
      this.Product = data;
    });
  }

  editProduct(product: { id: string; }) {
    this.router.navigate([`/edit/${product.id}`]);
  }

  removeProduct(product: { id: string; nombre: string }, index: any) {
    if (
      window.confirm(`Está seguro de eliminar el producto ${product.nombre}?`)
    ) {
      this.service.removeProduct(product.id).subscribe((data) => {
        this.Product.splice(index, 1);
      });
    }
  }
}
