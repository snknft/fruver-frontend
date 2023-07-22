import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductCrudComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    //BrowserModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [ProductListComponent, ProductCrudComponent]
})
export class ProductModule { }
