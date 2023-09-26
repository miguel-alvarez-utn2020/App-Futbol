import { Message } from './Channel';
import { HistoryMatch } from './HistoryMatch';
import { Match } from './Match';
import { Player } from './Player';

export enum GroupTypes {
  ORGANIZER = 'organizador',
  TRAINER = 'entrenador',
  PROVIDER = 'proveedor',
  SOCCER_COACH = 'tecnico',
}

export interface CreateGroup {
  name: string;
  photo: string;
  type: GroupTypes;
}

export interface Group extends CreateGroup {
  id: string;
  code: string;
  messages: Message[];
  players: Player[];
  admins: string[];
  matchs: Match[];
  historyMatch: HistoryMatch[];
}
