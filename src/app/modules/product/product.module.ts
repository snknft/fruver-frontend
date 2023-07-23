import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductoService } from '../../shared/service/product.service';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { FilterProductsPipe } from 'src/app/shared/pipes/filter-products-pipe';


@NgModule({
  declarations: [
    FilterProductsPipe,
    ProductListComponent,
    ProductCreateComponent,
    ProductCrudComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    //BrowserModule,
    FormsModule,
    ShoppingCartModule
  ],
  exports: [ProductListComponent, ProductCrudComponent],
  providers: [
    ProductoService
  ],
})
export class ProductModule { }
