import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private perisonal_info = 'http://127.0.0.1:8000/api/personal_info/';

  constructor(private http: HttpClient) { }

  getpersonal_info(){
    return this.http.get<any[]>(`${this.perisonal_info}`);
  }
  getpersonal_infoById(id:any) :Observable<Personals>{
    return this.http.get<Personals>(`${this.perisonal_info}${id}/`);
  }
  newperisonal_info(data:any){
    return this.http.post(`${this.perisonal_info}`,data);
  }
  updateperisonal_info(id:any,data:any){
    return this.http.put(`${this.perisonal_info}${id}/`,data);
  }
  deleteperisonal_info(id:any){
    return this.http.delete(`${this.perisonal_info}/${id}`);
  }
}
interface Personals{
  id:number,
  first_name: string,
  second_name: string,
  last_name: string,
  address: string,
  phone: string,
  dob: Date,
  gender: string,
  user:number
}
