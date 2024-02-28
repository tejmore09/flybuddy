import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];

  private loggedInUser = new BehaviorSubject<string | null>(null);

  private baseUrl = '/assets/db.json';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
  
}
