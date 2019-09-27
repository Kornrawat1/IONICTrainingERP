import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Quotation } from '../models/quotation';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addQuotaion(quotation): Observable<Quotation> {
    return this.http.post<Quotation>(this.baseUrl + '/quotations', quotation);
  }

  updateQuotation(quotation): Observable<Quotation> {
    return this.http.put<Quotation>(`${this.baseUrl}/quotations/${quotation.id}`, quotation);
  }

  getQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.baseUrl + '/quotations');
  }

  getQuotationById(id: number): Observable<Quotation> {
    return this.http.get<Quotation>(`${this.baseUrl}/quotations/${id}`);
  }
}
