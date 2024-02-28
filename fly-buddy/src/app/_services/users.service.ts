import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users'; // Update with your server API URL

  constructor(private http: HttpClient) {}

  registerUser(userDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, userDetails);
  }
}
