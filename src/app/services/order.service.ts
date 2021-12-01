import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../models/travel';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  save(order:Travel): Observable<Travel> {
    console.log("Save");
    return this.http.post < Travel > (`/api/Retirement?clientId=${order.clientId}&mark=${order.mark}&model=${order.model}&failure=${order.failure}` , order)
  }

}
