import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-message',
  templateUrl: './btn-message.component.html',
  styleUrls: ['./btn-message.component.scss']
})
export class BtnMessageComponent {
  @Input() message: string = '';
}
