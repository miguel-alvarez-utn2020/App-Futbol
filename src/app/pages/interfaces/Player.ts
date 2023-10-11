import { UserShared } from './User';

export enum Position {
  DEFENSOR = 'DEF',
  DELANTERO = 'DEL',
  MEDIO = 'MED',
  ARQUERO = 'GK',
  NO_POSICION = '',
}

export interface Valorization {
  speed: number;
  def: number;
  drible: number;
  shot: number;
  teamPlay: number;
}

export interface Player {
  id: string;
  user: UserShared;
  mainPosition: Position;
  secondaryPosition: Position;
  valorization: Valorization;
  valorizations: Valorization[];
  matchWins: number;
  matchLose: number;
  goalkeeper: boolean;
  quantityValorization: number;
  generalValorization: number;
  playersValorized: string[];
}
