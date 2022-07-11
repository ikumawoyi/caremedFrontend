import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models';
import { HttpClientHelper } from './urlHelper';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  //baseUrl: string = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  addClient(homeObj: Client){
    return this.http.post<Client>(`${HttpClientHelper.baseURL}/clients/create`, homeObj)
  }

  listClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${HttpClientHelper.baseURL}/clients`)

    //return this.http.get<CareHome[]>(this.baseUrl + 'carehomes/')
  }

  viewClient(id: string){
    return this.http.get(`${HttpClientHelper.baseURL}/clients/${id}`)
  }

  medication(id: any){
    return this.http.get(`${HttpClientHelper.baseURL}/clients/medication/${id}`)
  }

  createmedication(homeObj: any){
    return this.http.post(`${HttpClientHelper.baseURL}/clients/createmedication`, homeObj)
  }

  deleteClient(id: any){
    return this.http.delete(`${HttpClientHelper.baseURL}/clients/delete/${id}`)
  }

  updateClient(id: any, homeObj: any){
    return this.http.put(`${HttpClientHelper.baseURL}/clients/update/${id}`, homeObj)
  }


}
