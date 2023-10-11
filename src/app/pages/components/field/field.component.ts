import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field-vs-5.component.scss']
})
export class FieldComponent {
  @Input() matchType: number = 5
  @Input() formationTeamOne: number = 1
  @Input() formationTeamTwo: number = 1
  teams = []

  teamOne = [
    {
      mainPosition: 'gk',
    },
    {
      mainPosition: 'def-1',
    },
    {
      mainPosition: 'def-2',
    },
    {
      mainPosition: 'med-1',
    },
    {
      mainPosition: 'del-1',
    },

  ]
  teamTwo = [
    {
      mainPosition: 'gk',
    },
    {
      mainPosition: 'def-1',
    },
    {
      mainPosition: 'def-2',
    },
    {
      mainPosition: 'med-1',
    },
    {
      mainPosition: 'del-1',
    },
  ]

  buildMatchField(){
  }
}
