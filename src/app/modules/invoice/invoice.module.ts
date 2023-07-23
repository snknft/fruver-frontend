import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceService } from 'src/app/shared/service/invoice.service';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceRoutingModule } from './invoice-routing.module';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceDetailComponent
  ],
  imports: [
    InvoiceRoutingModule,
    CommonModule,
  ],
  exports: [InvoiceListComponent, InvoiceDetailComponent],
  providers: [InvoiceService]
})
export class InvoiceModule { }
