import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent {
    @Input() errorLabel: string = ''
}
