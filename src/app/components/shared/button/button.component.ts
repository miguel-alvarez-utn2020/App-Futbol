import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
   
    @Input() label = 'click';
    @Input() color = 'primary';
    @Input() expand: string | undefined = undefined;
    @Input() fill = 'solid';
    @Input() shape = 'none';
    @Input() disabled = false;
    @Input() fn = () => {};
    @Input() props: any;
}
