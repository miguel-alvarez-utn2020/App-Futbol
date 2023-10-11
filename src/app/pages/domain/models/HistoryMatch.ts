import { Player } from './Player';

export interface CreateHistory {
  whoWinMatch: Player[];
  whoLoseMatch: Player[];
  bestPlayer: string;
  date: Date;
}

export interface HistoryMatch extends CreateHistory {
  id: string;
}
