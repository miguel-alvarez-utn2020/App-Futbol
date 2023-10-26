import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() title:string = ''
  @Input() description:string = ''
  @Input() UserName :string = ''
}
