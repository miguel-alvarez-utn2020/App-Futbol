import { Injectable, inject } from '@angular/core';
import { CreateMatch, Match } from '../domain/models/Match';
import { Observable, of } from 'rxjs';
import { MatchRepositoryImplementation } from '../data/implementation/match.repository';
import { CreateHistory } from '../domain/models/HistoryMatch';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matchRepositoryImplementation = inject(MatchRepositoryImplementation);

  create(groupId: string, match: CreateMatch): Observable<Match> {
      return this.matchRepositoryImplementation.create(groupId, match);
  }

  join(matchId: string, playerId: string): Observable<Match>{
    return this.matchRepositoryImplementation.join(matchId, playerId);
  }

  quit(matchId: string, playerId: string): Observable<Match>{
    return this.matchRepositoryImplementation.quit(matchId, playerId);
  }

  order(matchId: string): Observable<Match>{
    return this.matchRepositoryImplementation.order(matchId);
  }

  generateHistory(matchId: string): Observable<CreateHistory>{
    return this.matchRepositoryImplementation.generateHistory(matchId);
  }

}
