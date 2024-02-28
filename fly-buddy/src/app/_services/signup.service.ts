import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'asset/db.json';

  constructor(private http: HttpClient) {}

  signupUser(userDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, userDetails);
  }
}
