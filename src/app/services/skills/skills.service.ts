import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skill = 'http://127.0.0.1:8000/api/skills/';
  private user_skill = 'http://127.0.0.1:8000/api/user_skills/'

  constructor(private http: HttpClient) { }

  getskill(){
    return this.http.get<any[]>(`${this.skill}`);
  }
  getskillById(id:any):Observable<skills>{
    return this.http.get<skills>(`${this.skill}?user=${id}`);
  }
  getskillById2(id:any):Observable<skills>{
    return this.http.get<skills>(`${this.user_skill}${id}/`);
  }
  newskill(data:any){
    return this.http.post(`${this.skill}`,data);
  }
  updateskill(id:any,data:any){
    return this.http.put(`${this.skill}/${id}`,data);
  }
  deleteskill(id:any){
    return this.http.delete(`${this.skill}${id}/`);
  }
}
interface skills{
  id:number,
  skills_name:string,
  user:number
}
