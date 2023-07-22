import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from '../../shared/service/user.service';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports: [],
  providers: [
    UserService
  ],
})
export class UserModule { }
