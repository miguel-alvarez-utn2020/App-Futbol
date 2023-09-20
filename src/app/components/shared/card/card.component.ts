import { Component, Input } from '@angular/core';
import { CssCard } from './interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() content: string = '';
  @Input() imgUrl: string = '';
}
