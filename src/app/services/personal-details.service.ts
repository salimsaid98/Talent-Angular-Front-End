import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {
  private Personal_info= 'http://127.0.0.1:8000/api/personal_info/';
  private user_information= 'http://127.0.0.1:8000/api/user-information/';


  constructor(private http: HttpClient) { }

  // Get all Personal_info
  getPersonal_infos(): Observable<Personal_info[]> {
    return this.http.get<Personal_info[]>(this.Personal_info);
  }

  // Get a single Personal_info by id
  getPersonal_info(id: number): Observable<Personal_info> {
    return this.http.get<Personal_info>(`${this.Personal_info}${id}/`);
  }

  getPersona_single(id: number): Observable<Personal_info> {
    return this.http.get<Personal_info>(`${this.user_information}${id}/`);
  }

  // Create a new Personal_info
  createPersonal_info(Personal_info: Personal_info): Observable<Personal_info> {
    return this.http.post<Personal_info>(this.Personal_info, Personal_info);
  }

  // Update an existing Personal_info
  updatePersonal_info(Personal_info: Personal_info): Observable<Personal_info> {
    return this.http.put<Personal_info>(`${this.Personal_info}${Personal_info.id}/`, Personal_info);
  }

  // Delete a Personal_info by id
  deletePersonal_info(id: number): Observable<any> {
    return this.http.delete(`${this.Personal_info}${id}/`);
  }
}
interface Personal_info{
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
