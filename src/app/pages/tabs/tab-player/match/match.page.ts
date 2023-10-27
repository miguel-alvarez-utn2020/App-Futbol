import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import {
  selectActiveGroup,
  selectGroupMatch,
  selectMainUserPlayer,
  selectUser,
} from '@app/state/selectors';
import { Match, TeamWin } from 'src/app/pages/domain/models/Match';
import { User } from 'src/app/pages/domain/models/User';
import { Player } from 'src/app/pages/domain/models/Player';
import { generateHistoryMatch, joinMatch, quitMatch } from '@app/state/actions';
import { Group } from 'src/app/pages/domain/models/Group';
@Component({
  selector: 'app-match',
  templateUrl: 'match.page.html',
  styleUrls: ['match.page.scss'],
})
export class MatchPage implements OnInit {
  private store = inject(Store<AppState>);
  public matches = signal<Match[]>([]);
  public indexMatch: number = 0;
  public currentMatch: Match = null;
  public user = signal<User>({} as User);
  public userMainPlayer = signal<Player>({} as Player);
  public activeGroup = signal<Group>({} as Group);
  public firstTeamWin: TeamWin = TeamWin.FIRST;
  public secondTeamWin: TeamWin = TeamWin.SECOND;
  constructor() {}

  ngOnInit(): void {
    this.loadUserData();
    this.loadMatches();
    this.getActiveGroup();
  }

  loadMatches() {
    this.store.select(selectGroupMatch).subscribe({
      next: (matches: Match[]) => {
        this.matches.set(matches);
        if(matches){
          this.currentMatch = this.matches()[this.indexMatch];
        }
      },
    });
  }

  loadUserData() {
    this.store.select(selectUser).subscribe({
      next: ({ user }) => {
        this.user.set(user)
        if(user){
          this.loadMainUser();
        }
      }
    });
  }

  getActiveGroup(){
    this.store.select(selectActiveGroup).subscribe({
      next: ( activeGroup ) => this.activeGroup.set(activeGroup)
    })
  }

  loadMainUser() {
    this.store.select(selectMainUserPlayer(this.user()?.id)).subscribe({
      next: (player) => this.userMainPlayer.set(player),
    });
  }

  async ionSlideDidChange(event) {
    const swiperIndex = await event.target.getSwiper();
    this.indexMatch = swiperIndex.realIndex;
    this.currentMatch = this.matches()[this.indexMatch];
  }

  matchConfirm() {
    const matchId = this.currentMatch.id;
    const playerId = this.userMainPlayer().id;
    this.store.dispatch(joinMatch({matchId, playerId}));
  }

  matchQuit(){
    const matchId = this.currentMatch.id;
    const playerId = this.userMainPlayer().id;
    this.store.dispatch(quitMatch({matchId, playerId}));
  }

  teamWin(teamWin: TeamWin){
      const generateHistory = {
          groupId: this.activeGroup().id,
          matchId: this.currentMatch.id,
          teamWin
      }
      this.store.dispatch(generateHistoryMatch({generateHistory}));
  }
}
