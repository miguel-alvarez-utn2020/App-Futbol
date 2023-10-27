import { HttpClient, HttpParams } from "@angular/common/http";
import { inject } from "@angular/core";
import { CreateMatch, Match } from "../../domain/models/Match";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { PATHS } from "../path-routes";
import { CreateHistory, GenerateHistory } from "../../domain/models/HistoryMatch";
import { HttpParamsService } from "../../services/http-params.service";



export class MatchRepositoryImplementation {
    private http = inject(HttpClient);
    private httpParamsService = inject(HttpParamsService)

    create(groupId: string, match: CreateMatch): Observable<Match>{
        return this.http.post<Match>(`${environment.server_url}${PATHS.MATCH_CREATE(groupId)}`, match);
    };

    join(matchId: string, playerId: string): Observable<Match>{
        const params = this.httpParamsService.buildHttpParams({ matchId, playerId });
        return this.http.patch<Match>(`${environment.server_url}${PATHS.MATCH_JOIN}`, {}, {params});
    }
    
    quit(matchId: string, playerId: string): Observable<Match>{
        const params = this.httpParamsService.buildHttpParams({ matchId, playerId });
        return this.http.patch<Match>(`${environment.server_url}${PATHS.MATCH_QUIT}`, {}, {params});
    }

    order(matchId: string): Observable<Match>{
        const params = this.httpParamsService.buildHttpParams({ matchId });
        return this.http.patch<Match>(`${environment.server_url}${PATHS.MATCH_ORDER(matchId)}`, {}, {params})
    }

    generateHistory(generateHistory: GenerateHistory): Observable<CreateHistory>{
        return this.http.post<CreateHistory>(`${environment.server_url}${PATHS.MATCH_GENERATE_HISTORY}`, generateHistory)
    }
}