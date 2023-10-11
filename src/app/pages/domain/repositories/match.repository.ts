import { Observable } from "rxjs";
import { CreateMatch, Match } from "../models/Match";
import { CreateHistory } from "../models/HistoryMatch";


export interface MathRepository {
    create: (groupId: string, match: CreateMatch) => Observable<Match>,
    join: (matchId: string, playerId: string)=> Observable<Match>,
    quit: (matchId: string, playerId: string)=> Observable<Match>,
    order: (matchId: string) => Observable<Match>,
    generateHistory: (matchId: string) => Observable<CreateHistory>
}