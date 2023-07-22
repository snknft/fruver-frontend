import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductoService } from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{
  id = '';
  product: Product = new Product('', 'F', '', '', '', 0, 0);

  constructor(private service: ProductoService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      //Editar
      this.service.getProduct(this.id).subscribe(data => {
        this.product = data;
      });
    }
  }  

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.encodeImageFileAsBase64(file);
  }

  encodeImageFileAsBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.product.imagen = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  toManagement(){
    this.router.navigate(['/']);
  }

  removeImage(){
    this.product.imagen = "";
  }

  productSave() {
    console.log(this.product);

    if (this.product.id) {
      this.service.updateProduct(this.product).subscribe(
        data =>{
          this.toManagement();
      });
    }
    else{
      this.service.createProduct(this.product).subscribe(
        data =>{
          this.toManagement();
      });
    }
  }

}
