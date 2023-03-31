import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {
  private Personal_info= 'http://127.0.0.1:8000/api/personal_info/';
  private user_information= 'http://127.0.0.1:8000/api/user_personal_info/';
  private education = 'http://127.0.0.1:8000/api/education/'
  private user_education = 'http://127.0.0.1:8000/api/user_education/'

  constructor(private http: HttpClient) { }

  // Get all Personal_info
  // getPersonal_infos(): Observable<Personal_info[]> {
  //   return this.http.get<Personal_info[]>(this.Personal_info);
  // }

  // Get a single Personal_info by id
  getPersonal_info(id: number): Observable<Personal_info> {
    return this.http.get<Personal_info>(`${this.Personal_info}${id}/`);
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
  // deletePersonal_info(id: number): Observable<any> {
  //   return this.http.delete(`${this.Personal_info}${id}/`);
  // }
  createPersonal_img(Personal_info: Personal_info): Observable<Personal_info> {
    return this.http.post<Personal_info>(this.Personal_info, Personal_info);
  }

  getUser_info(id: number): Observable<Personal_info> {
    return this.http.get<Personal_info>(`${this.user_information}${id}/`);
  }

    // Crud Education
  // Get all Education
  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.education);
  }

  // Get a single Education by id
  getEducation(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.education}${id}/`);
  }

  // Create a new Education
  createEducation(Education: Education): Observable<Education> {
    return this.http.post<Education>(this.education, Education);
  }

  // Update an existing Education
  updateEducation(Education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.education}${Education.id}/`, Education);
  }

  // Delete a Education by id
  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.education}${id}/`);
  }

  get_user_Education(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.user_education}${id}/`);
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
  image:string
  user:number
}

interface Education{
  id:number,
  course_name:string,
  education_level:string,
  estart_date:Date,
  eend_date:Date,
  user:number
}
