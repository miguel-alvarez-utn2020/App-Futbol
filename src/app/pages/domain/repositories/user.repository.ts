import { User } from "../models/User";


export interface UserRepository {
    update: (user : any) => Promise<User>
}