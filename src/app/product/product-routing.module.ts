import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  {
    path: 'management',
    component: ProductCrudComponent,
  },
  { path: 'create', component: ProductCreateComponent },
  { path: 'edit/:id', component: ProductCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
