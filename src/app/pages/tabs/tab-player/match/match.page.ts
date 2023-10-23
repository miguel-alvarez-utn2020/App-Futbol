import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { selectGroupMatch } from '@app/state/selectors'
import { Match } from 'src/app/pages/domain/models/Match';
@Component({
  selector: 'app-match',
  templateUrl: 'match.page.html',
  styleUrls: ['match.page.scss']
})
export class MatchPage implements OnInit {
  private store = inject(Store<AppState>);
  public matches = signal<Match[]>([]);
  constructor() {}
  ngOnInit(): void {
    this.store.select(selectGroupMatch).subscribe({
      next: (matches: Match[]) => this.matches.set(matches) 
    })
  }

}
