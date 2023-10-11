import { Observable } from 'rxjs';
import {  User, CreateUser } from '../models/User'

export interface AuthRepository {
    login: (userName: string, password: string) => Observable<{user: User, token}>,
    register:(user: CreateUser) => Observable<{user: User, token: string}>,
    checkToken: (token: string) => Observable<{ok: string, user: null | User}>
}