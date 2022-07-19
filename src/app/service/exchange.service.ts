import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}

  baseUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json/';

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
