import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  readonly APIUrl="https://localhost:44383/api/MedicineStock";

  constructor(private http: HttpClient) { }

  getStock(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl)
  }
}
