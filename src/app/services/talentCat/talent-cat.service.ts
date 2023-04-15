import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalentCatService {
  private talentCat = 'http://127.0.0.1:8000/api/user_talent-cat/';
  private talentCatcount = 'http://127.0.0.1:8000/api/talent-category-count/';



  constructor(private http: HttpClient) { }

  gettalentCat(){
    return this.http.get<any[]>(`${this.talentCatcount}`);
  }
  gettalentCatById(id:any){
    return this.http.get<any[]>(`${this.talentCat}${id}/`);
  }
  newtalentCat(data:any){
    return this.http.post(`${this.talentCat}`,data);
  }
  updatetalentCat(id:any,data:any){
    return this.http.put(`${this.talentCat}/${id}`,data);
  }
  deletetalentCat(id:any){
    return this.http.delete(`${this.talentCat}/${id}`);
  }
}
