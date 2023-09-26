import { Player } from './Player';

export enum TeamWin {
  FIRST = 'first',
  SECOND = 'second',
  NOT_FINISH = '',
}

export interface CreateMatch {
  date: Date;
  location: string;
  automaticAssemble: boolean;
  withSustitutes: boolean;
  rematch: boolean;
  isContinuous: boolean;
  quantityPlayers: number;
}

export interface Match extends CreateMatch {
  id: string;
  finish: boolean;
  teamWin: TeamWin;
  firstTeam: Player[];
  secondTeam: Player[];
  sustitutes: Player[];
}
