import { TeamWin } from './Match';
import { Player } from './Player';

export interface CreateHistory {
  whoWinMatch: Player[];
  whoLoseMatch: Player[];
  bestPlayer: string;
  date: Date;
}

export class GenerateHistory {
  groupId: string;
  matchId: string;
  teamWin: TeamWin;
}

export interface HistoryMatch extends CreateHistory {
  id: string;
}
