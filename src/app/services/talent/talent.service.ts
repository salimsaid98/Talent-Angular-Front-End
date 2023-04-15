import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalentService {
  private talent= 'http://127.0.0.1:8000/api/user_talent-by-id/';
  private talentlist = 'http://127.0.0.1:8000/api/user-talent-list/';
  private checkcv = 'http://127.0.0.1:8000/api/user-cv-status/'
  private applyTalent = 'http://127.0.0.1:8000/api/application/'
  private user_applicationlist = 'http://127.0.0.1:8000/api/user-application/'
  private user_application_status = 'http://127.0.0.1:8000/api/user-application-status/'
  private application = 'http://127.0.0.1:8000/api/application/'
  constructor(private http: HttpClient) { }

  gettalent(){
    return this.http.get<any[]>(`${this.talentlist}`);
  }
  gettalentById(id: any) {
    return this.http.get<any[]>(`${this.talent}${id}/`).pipe(
      map(res => res[0])
    );
  }
  newtalent(data:any){
    return this.http.post(`${this.talent}`,data);
  }
  updatetalent(id:any,data:any){
    return this.http.put(`${this.talent}/${id}`,data);
  }
  deletetalent(id:any){
    return this.http.delete(`${this.talent}/${id}`);
  }
// for application
  getCv(id: any) {
    return this.http.get<{ cv_status: string }>(`${this.checkcv}${id}/`);
  }

  createApplication(payload: any) {
    return this.http.post(this.applyTalent, payload);
  }
  getapplicationById(id: any) {
    return this.http.get<any>(`${this.user_applicationlist}${id}/`)
  }

  getapplicationStatusById(id: any) {
    return this.http.get<any>(`${this.user_application_status}${id}/`)
  }
  deletetapplication(id:any){
    return this.http.delete(`${this.application}${id}/`);
  }


}
interface Talents{
  id: number
  talent_name: string
  talentCategories: number
  company_name:string
  closing_date: Date
  duties_and_respo: String
  qualification: string
  employer: number
}
