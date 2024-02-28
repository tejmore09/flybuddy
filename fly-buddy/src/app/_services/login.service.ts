import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'asset/db.json'; // Update with your server API URL

  constructor(private http: HttpClient) {}

  loginUser(credentials: { username: string; password: string }): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${credentials.username}&password=${credentials.password}`);
  }
}
