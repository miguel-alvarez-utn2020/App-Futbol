import { User } from "src/app/pages/domain/models/User";

export interface LoadingState {
    loading: boolean;
}
export interface Language {
    language: string;
}

export interface UserState {
    user: User | null;
}