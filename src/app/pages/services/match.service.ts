import { Injectable } from '@angular/core';
import { CreateMatch, Match } from '../domain/models/Match';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {


  create(groupId: string, match: CreateMatch): Observable<Match> {
      return of()
  }
    // join: (matchId: string, playerId: string)=> Observable<Match>,
    // quit: (matchId: string, playerId: string)=> Observable<Match>,
    // order: (matchId: string) => Observable<Match>,
    // generateHistory: (matchId: string) => Observable<CreateHistory>

  constructor() { }
}
