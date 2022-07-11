import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CareHome } from '../models';
import { HttpClientHelper } from './urlHelper';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //baseUrl: string = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  listHomes(): Observable<CareHome[]>{
    return this.http.get<CareHome[]>(`${HttpClientHelper.baseURL}/carehomes`)

    //return this.http.get<CareHome[]>(this.baseUrl + 'carehomes/')
  }

  viewHome(id: string){
    return this.http.get(`${HttpClientHelper.baseURL}/carehomes/${id}`)
  }

  addHome(homeObj: CareHome){
    return this.http.post<CareHome>(`${HttpClientHelper.baseURL}/carehomes/create`, homeObj)
  }

  deleteHome(id: any){
    return this.http.delete(`${HttpClientHelper.baseURL}/carehomes/delete/${id}`)
  }

  updateHome(id: any, homeObj: any){
    return this.http.put(`${HttpClientHelper.baseURL}/carehomes/update/${id}`, homeObj)
  }
}
