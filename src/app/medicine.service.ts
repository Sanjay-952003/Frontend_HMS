import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:8080/api/v3/medicines"

  getMedicines():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseurl}`)
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseurl}`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseurl}/${id}`);
  }

  updateMedicineById(id:number,medicine:Medicine):Observable<object>{
    return this.httpClient.put<Patient>(`${this.baseurl}/${id}`,medicine);
  }

  deleteMedicine(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }
}
