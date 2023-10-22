import { Observable } from "rxjs";
import { CreateGroup, Group } from "../../domain/models/Group";
import { Valorization, Player } from "../../domain/models/Player";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { GroupRepository } from "../../domain/repositories/group.repository";
import { inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { PATHS } from "../path-routes";
import { StorageService } from "../../services/storage.service";
import { TOKEN } from "../../services/auth.service";

export class GroupRepositoryImplementation implements GroupRepository {
    private http = inject(HttpClient);
    private storageService = inject(StorageService);
    create(group: CreateGroup): Observable<Group>{
        return this.http.post<Group>(`${environment.server_url}${PATHS.CREATE_GROUP}`, group);
    };

    joinGroup(groupCode: string): Observable<Group>{
        return this.http.post<Group>(`${environment.server_url}${PATHS.JOIN_GROUP(groupCode)}`, {});
    };
    
    sendAdmin(groupId: string, playerId: string): Observable<Group>{
        const params = new HttpParams()
        .set('groupId', groupId)
        .set('playerId', playerId);

        return this.http.post<Group>(`${environment.server_url}${PATHS.SEND_ADMIN}`,{}, {params});
    };

    valorizePlayer(groupId: string, playerId: string, valorization: Valorization): Observable<Player>{
        const params = new HttpParams()
        .set('groupId', groupId)
        .set('playerId', playerId);

        return this.http.post<Player>(`${environment.server_url}${PATHS.VALORIZE_PLAYER}`,{}, {params});
    };

    getGroupById(groupId: string): Observable<Group>{
        return this.http.post<Group>(`${environment.server_url}${PATHS.GET_GROUP(groupId)}`,{});
    };
}