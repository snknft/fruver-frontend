import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoService } from './shared/service/product.service';
import { HeaderComponent } from './header/header.component';
import { ProductModule } from './product/product.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserModule } from './user/user.module';
import { WorkspaceComponent } from './workspace/workspace.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ProductModule,
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
