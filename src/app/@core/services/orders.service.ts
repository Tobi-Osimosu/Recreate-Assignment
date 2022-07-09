import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getAllCurrencies() {
    const url = `${environment.allCurrenciesUrl}`;

    return this.http.get<any>(url);
  }
}
