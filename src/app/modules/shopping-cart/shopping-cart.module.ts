import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';
import { ShoppingCartDetailService } from 'src/app/shared/service/shopping-cart-detail.service ';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    ShoppingCartRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    CartComponent
  ],
  providers: [
    ShoppingCartService,
    ShoppingCartDetailService
  ],
})
export class ShoppingCartModule { }
