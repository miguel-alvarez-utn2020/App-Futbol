import { Injectable, inject } from '@angular/core';
import { AuthRepositoryImplementation } from '../data/implementation/auth.repository';
import { Observable } from 'rxjs';
import { CreateUser, User } from '../domain/models/User';

export const USER = 'user';
export const TOKEN = 'token';
export const GROUP_ID = 'groupId';
export const MATCH_ID = 'matchId';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authRepositoryImplementation = inject(AuthRepositoryImplementation)
  
  login(email: string, password: string): Observable<{user: User, token: string}>{
    return this.authRepositoryImplementation.login(email, password);
  }

  register(userCreate: CreateUser): Observable<{ user: User; token: string; }>{
    return this.authRepositoryImplementation.register(userCreate);
  }

  checkToken(token: string): Observable<{ ok: string; user: User; }>{
    return this.authRepositoryImplementation.checkToken(token);
  }
  
}
