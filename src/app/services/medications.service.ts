import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medication } from '../models/medication';
import { HttpClientHelper } from './urlHelper';

@Injectable({
  providedIn: 'root'
})
export class MedicationsService {

  constructor(private http: HttpClient) { }
  
  listMedication(): Observable<Medication[]>{
    return this.http.get<Medication[]>(`${HttpClientHelper.baseURL}/medications`)

    //return this.http.get<CareHome[]>(this.baseUrl + 'carehomes/')
  }

  viewMedication(id: string){
    return this.http.get(`${HttpClientHelper.baseURL}/medications/${id}`)
  }

  addMedication(homeObj: Medication){
    return this.http.post<Medication>(`${HttpClientHelper.baseURL}/medications/create`, homeObj)
  }

  deleteMedication(id: any){
    return this.http.delete(`${HttpClientHelper.baseURL}/medications/delete/${id}`)
  }

  updateMedication(id: any, homeObj: any){
    return this.http.put(`${HttpClientHelper.baseURL}/medications/update/${id}`, homeObj)
  }
}
