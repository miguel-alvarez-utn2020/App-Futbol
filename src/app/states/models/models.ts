import { Group } from "src/app/pages/domain/models/Group";
import { User } from "src/app/pages/domain/models/User";

export interface LoadingState {
    loading: boolean;
}
export interface Language {
    language: string;
}

export interface UserState {
    user: User | null;
    activeGroup: Group | null;
}

export interface AuthState{
    loggedIn: boolean;
}