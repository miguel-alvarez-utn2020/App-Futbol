import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent {
  @Input() disabled: boolean = false;
  @Input() buttonLabel: string = '';
  @Input() fn = () => {};
}
