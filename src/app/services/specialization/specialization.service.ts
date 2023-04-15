import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  private specialization = 'http://127.0.0.1:8000/api/specializtion/';
  private user_specialization = 'http://127.0.0.1:8000/api/user_specialization/'

  constructor(private http: HttpClient) { }

  getspecialization(){
    return this.http.get<any[]>(`${this.specialization}`);
  }
  getspecializationById(id:any):Observable<Specializations>{
    return this.http.get<Specializations>(`${this.specialization}?user=${id}`);
  }
  getspecializationById2(id:any):Observable<Specializations>{
    return this.http.get<Specializations>(`${this.user_specialization}${id}/`);
  }
  newspecialization(data:any){
    return this.http.post(`${this.specialization}`,data);
  }
  updatespecialization(id:any,data:any){
    return this.http.put(`${this.specialization}/${id}`,data);
  }
  deletespecialization(id:any){
    return this.http.delete(`${this.specialization}${id}/`);
  }
}
interface Specializations{
  id:number,
  specialization_name:string,
  user:number
}
