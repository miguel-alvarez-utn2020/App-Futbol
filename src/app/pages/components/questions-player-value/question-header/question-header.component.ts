import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-header',
  templateUrl: './question-header.component.html',
  styleUrls: ['./question-header.component.scss']
})
export class QuestionHeaderComponent {
    @Input() title: string = ''
    @Input() close = ()=>{}
} 
