import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() accordionLabel: string = ''
  @Input() noContentMessage: string = ''
  @Input() contentLength: number = 0;
}
