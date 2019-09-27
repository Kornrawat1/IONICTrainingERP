import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Invoices } from '../models/invoices';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addQuotaion(invoices): Observable<Invoices> {
    return this.http.post<Invoices>(this.baseUrl + '/invoices', invoices);
  }

  updateInvoices(invoices): Observable<Invoices> {
    return this.http.put<Invoices>(`${this.baseUrl}/invoices/${invoices.id}`, invoices);
  }

  getInvoices(): Observable<Invoices[]> {
    return this.http.get<Invoices[]>(this.baseUrl + '/invoices');
  }

  getInvoicesById(id: number): Observable<Invoices> {
    return this.http.get<Invoices>(`${this.baseUrl}/invoices/${id}`);
  }
}
