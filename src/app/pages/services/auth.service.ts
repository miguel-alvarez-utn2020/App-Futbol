import { Injectable, inject } from '@angular/core';
import { AuthRepositoryImplementation } from '../data/implementation/auth.repository';
import { Observable } from 'rxjs';
import { User } from '../domain/models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  constructor() { }
  
  login(email: string, password: string): Observable<{user: User, token: string}>{
    const credentials = {
      email,
      password
    };
    return this.http.post<{user: User, token: string}>(`${environment.server_url}/auth/login`, credentials);
  }
  
}
