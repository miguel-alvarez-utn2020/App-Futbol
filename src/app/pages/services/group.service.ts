import { Injectable, inject } from '@angular/core';
import { GroupRepositoryImplementation } from '../data/implementation/group.repository';
import { CreateGroup, Group } from '../domain/models/Group';
import { Observable } from 'rxjs';
import { Player, Valorization } from '../domain/models/Player';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupRepositoryImplementation = inject(GroupRepositoryImplementation)
    create(group: CreateGroup): Observable<Group>{
      return this.groupRepositoryImplementation.create(group);
    };

    joinGroup(groupCode: string): Observable<Group>{
      return this.groupRepositoryImplementation.joinGroup(groupCode);
    };

    sendAdmi(groupId: string, playerId: string): Observable<Group>{
      return this.groupRepositoryImplementation.sendAdmin(groupId, playerId);
    };

    valorizePlayer(groupId: string, playerId: string, valorization: Valorization): Observable<Player>{
      return this.groupRepositoryImplementation.valorizePlayer(groupId, playerId, valorization);
    };
    
    getGroupById(groupId: string): Observable<Group>{
      return this.groupRepositoryImplementation.getGroupById(groupId);
    };
}
