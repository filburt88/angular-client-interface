import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<User> {
    return this.http.get<User>('http://vcoronado-001-site12.dtempurl.com/api/Users?userOperation=1')
  }

  login(username:string,password:string): Observable<User> {
    return this.http.get<User>(`/api/Login?email=${username}&password=${password}`)
  }

}
