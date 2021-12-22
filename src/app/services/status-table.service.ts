import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatusTravel } from '../models/statustravel';


@Injectable({
  providedIn: 'root'
})
export class StatusTableService {

  constructor(private http:HttpClient) { }
  
  estadodelviaje(){
    return this.http.get<StatusTravel[]>(`/api/Equipment?clientId=${localStorage.getItem('userLogued')}`)
  }
  
}
