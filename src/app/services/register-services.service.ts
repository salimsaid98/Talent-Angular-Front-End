import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServicesService {

  private baseUrl = 'http://127.0.0.1:8000/api/api/register/';
  private baseUr2 = 'http://127.0.0.1:8000/api/user-information/';

  constructor(private http: HttpClient) { }

  // Get all User
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  // Get a single User by id
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}${id}/`);
  }

  // Create a new User
  createUser(User: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, User);
  }

  // Update an existing User
  updateUser(User: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}${User.id}/`, User);
  }

  // Delete a User by id
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}

interface User {
  id: number;
  username: string;
  email: string;
  password:string;
}
