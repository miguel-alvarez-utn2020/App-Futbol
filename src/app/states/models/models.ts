import { Message } from "src/app/pages/domain/models/Channel";
import { Group } from "src/app/pages/domain/models/Group";
import { HistoryMatch } from "src/app/pages/domain/models/HistoryMatch";
import { Match } from "src/app/pages/domain/models/Match";
import { Player } from "src/app/pages/domain/models/Player";
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

export interface AuthState{
    loggedIn: boolean;
}

export interface GroupsState {
    groups: Group[] | null;
}

export interface ActiveGroupState{
    group: Group | null;
}