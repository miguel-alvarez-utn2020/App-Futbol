import { Injectable } from "@angular/core";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { Observable } from "rxjs";
import { User, CreateUser } from "../../domain/models/User";




@Injectable()
export class AuthRepositoryImplementation implements AuthRepository {
    register: (user: CreateUser) => Observable<{ user: User; token: string; }>;
    checkToken: (token: string) => Observable<{ ok: string; user: User; }>;

    login(userName: string, password: string): Observable<{ user: User; token: string; }> {
        return new Observable(observer => {
            console.log(observer);
            observer.next({
                user: {
                    name: 'string',
                    lastname: 'string',
                    photo: 'string',
                    email: 'string',
                    password: 'string',
                    age: 1,
                    id: '1',
                    groups: [],
                    notifications: [],
                },
                token: ''
            });
            observer.complete();
            // executeEndpoint<{ user: User, token: string }>({
            //     path: PATHS.LOGIN,
            //     requiredAuth: false,
            //     method: 'POST',
            //     data: {
            //         email: userName,
            //         password
            //     }
            // }).then(response => {
            //     observer.next({
            //         token: response.token,
            //         user: UserMapper(response.user)
            //     });
            //     observer.complete();
            // }).catch(error => {
            //     observer.error(error);
            // });
        });
    }
    
    
}