import { Observable } from "rxjs";
import { CreateGroup, Group } from "../../domain/models/Group";
import { Valorization, Player } from "../../domain/models/Player";
import { GroupRepository } from "../../domain/repositories/group.repository";
import { inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { PATHS } from "../path-routes";
import { HttpParamsService } from "../../services/http-params.service";


export class GroupRepositoryImplementation implements GroupRepository {
    private http = inject(HttpClient);
    private httpParamsService = inject(HttpParamsService);
    
    create(group: CreateGroup): Observable<Group>{
        return this.http.post<Group>(`${environment.server_url}${PATHS.CREATE_GROUP}`, group);
    };

    joinGroup(groupCode: string): Observable<Group>{
        return this.http.patch<Group>(`${environment.server_url}${PATHS.JOIN_GROUP(groupCode)}`, {});
    };
    
    sendAdmin(groupId: string, playerId: string): Observable<Group>{
        const params = this.httpParamsService.buildHttpParams({ groupId, playerId });
        return this.http.patch<Group>(`${environment.server_url}${PATHS.SEND_ADMIN}`,{}, {params});
    };

    valorizePlayer(groupId: string, playerId: string, valorization: Valorization): Observable<Player>{
        const params = this.httpParamsService.buildHttpParams({ groupId, playerId });
        return this.http.patch<Player>(`${environment.server_url}${PATHS.VALORIZE_PLAYER}`, valorization, {params});
    };

    getGroupById(groupId: string): Observable<Group>{
        return this.http.get<Group>(`${environment.server_url}${PATHS.GET_GROUP(groupId)}`,{});
    };
}