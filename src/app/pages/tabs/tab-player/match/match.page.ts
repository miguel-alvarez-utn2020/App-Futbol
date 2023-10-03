import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: 'match.page.html',
  styleUrls: ['match.page.scss']
})
export class MatchPage {
  @Input() matchType: number = 5
  constructor() {}

}
