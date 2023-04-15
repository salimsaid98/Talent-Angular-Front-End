import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {



    private work_experiencen = 'http://127.0.0.1:8000/api/work_eperience/';
    private user_work_experience = 'http://127.0.0.1:8000/api/user_work_experience/'

    constructor(private http: HttpClient) { }

    getwork_experiencen(){
      return this.http.get<any[]>(`${this.work_experiencen}`);
    }
    getwork_experiencenById(id:any):Observable<work_experiencens>{
      return this.http.get<work_experiencens>(`${this.work_experiencen}?user=${id}`);
    }
    getwork_experiencenById2(id:any):Observable<work_experiencens>{
      return this.http.get<work_experiencens>(`${this.user_work_experience}${id}/`);
    }
    newwork_experiencen(data:any){
      return this.http.post(`${this.work_experiencen}`,data);
    }
    updatework_experiencen(id:any,data:any){
      return this.http.put(`${this.work_experiencen}/${id}`,data);
    }
    deletework_experiencen(id:any){
      return this.http.delete(`${this.work_experiencen}${id}/`);
    }
  }
  interface work_experiencens{
    id:number,
    company_name:string,
    job_tittle:string,
    suppervisor_name:string,
    suppervisor_phone:string,
    wend_date:Date,
    wstart_date:Date,
    user:number
  }


