import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { WorkspaceComponent } from './components/workspace/workspace.component';


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
