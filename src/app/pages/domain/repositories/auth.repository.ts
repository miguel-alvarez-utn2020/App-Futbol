import { Observable } from 'rxjs';
import {  User, CreateUser, UserLogin } from '../models/User'

export interface AuthRepository {
    login: (credentials: UserLogin) => Observable<{user: User, token: string}>,
    register:(user: CreateUser) => Observable<{user: User, token: string}>,
    checkToken: (token: string) => Observable<{ok: string, user: null | User}>
}