import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss']
})
export class FabButtonComponent {
    @Input() fn = () => {};
    @Input() iconName = 'add';
    @Input() side: string | undefined = undefined;
    @Input() horizontal: string | undefined = 'center';
    @Input() vertical: string | undefined = 'center';
}
