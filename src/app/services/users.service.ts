import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;
  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiUsers;
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getUser(id): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  setUser(id, data): Observable<any> {
    return this.http.put(this.baseUrl + id, data);
  }

  addUser(data): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
}
