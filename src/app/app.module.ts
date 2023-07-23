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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SessionService } from './shared/service/session.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

    ProductModule,
    UserModule,
    //ShoppingCartModule
  ],
  bootstrap: [AppComponent],
  providers: [SessionService]
})
export class AppModule { }
