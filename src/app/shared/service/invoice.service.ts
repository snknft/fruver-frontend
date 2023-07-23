import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getInvoices() {
    return this.http.get<Invoice[]>(`${this.BASE_URL}/facturas`);
  }
  getInvoice(id: string) {
    return this.http.get<Invoice>(
      `${this.BASE_URL}/facturas/${id}`
    );
  }
  findInvoice(tipo: string, cedula: string) {
    return this.http.get<Invoice>(
      `${this.BASE_URL}/facturas/${tipo}/${cedula}`
    );
  }
  createInvoice(producto: Invoice) {
    return this.http.post<string>(`${this.BASE_URL}/facturas`, producto);
  }
  updateInvoice(producto: Invoice) {
    return this.http.put<string>(`${this.BASE_URL}/facturas`, producto);
  }
  removeInvoice(idInvoiceo: string) {
    return this.http.delete<string>(`${this.BASE_URL}/facturas/${idInvoiceo}`);
  }
}
