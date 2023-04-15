import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademicQualificationService {
  private academic= 'http://127.0.0.1:8000/api/education/';
  private user_academic = 'http://127.0.0.1:8000/api/user_education/';


  constructor(private http: HttpClient) { }

  getacademic(){
    return this.http.get<any[]>(`${this.academic}`);
  }
  getacademicById(id:any):Observable<Educations>{
    return this.http.get<Educations>(`${this.academic}?user=${id}`);
  }
  getacademicById2(id:any):Observable<Educations>{
    return this.http.get<Educations>(`${this.user_academic}${id}/`);
  }
  newacademic(data:any){
    return this.http.post(`${this.academic}`,data);
  }
  updateacademic(id:any,data:any){
    return this.http.put(`${this.academic}/${id}`,data);
  }
  deleteacademic(id:any){
    return this.http.delete(`${this.academic}${id}/`);
  }
}
interface Educations{
id:number,
education_level:string,
program:string,
institution:string,
estart_date:Date,
eend_date:Date,
user:number
}
