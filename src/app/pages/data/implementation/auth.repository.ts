import { Injectable, inject } from "@angular/core";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { Observable } from "rxjs";
import { User, CreateUser, UserLogin } from "../../domain/models/User";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { PATHS } from '../path-routes'



@Injectable()
export class AuthRepositoryImplementation implements AuthRepository {
    private http = inject(HttpClient)
    tokenObj = {}
    checkToken(token: string): Observable<{ ok: string; user: User; }>{
        if(token){
            this.tokenObj = {token: JSON.parse(token)};
        }
        return this.http.post<{ ok: string; user: User; }>(`${environment.server_url}${PATHS.CHECK_TOKEN}`,this.tokenObj)
    };
    
    login(credentials: UserLogin): Observable<{ user: User; token: string; }> {
        return this.http.post<{user: User, token: string}>(`${environment.server_url}${PATHS.LOGIN}`, credentials);
    }
    
    register(user: CreateUser): Observable<{ user: User; token: string; }>{
        return this.http.post<{ user: User; token: string; }>(`${environment.server_url}${PATHS.REGISTER}`, user);
    };
    
}