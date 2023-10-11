import { Observable } from "rxjs";
import { CreateGroup, Group } from "../models/Group";
import { Player, Valorization } from "../models/Player";


export interface GroupRepository {
    create: (group: CreateGroup) => Observable<Group>,
    joinGroup: (groupCode: string) => Observable<Group>,
    sendAdmin: (groupId: string, playerId: string) => Observable<Group>,
    valorizePlayer: ( groupId: string, playerId: string, valorization: Valorization)=> Observable<Player>,
    getGroupById: (groupId: string) => Observable<Group>
}