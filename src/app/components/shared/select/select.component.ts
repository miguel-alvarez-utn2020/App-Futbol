import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Output() languagesSelected: EventEmitter<string> = new EventEmitter<string>();
  @Input() languages: string[] = [];
  @Input() placeholder: string | undefined = undefined
  @Input() diviceLanguage: string = 'es';

  selectLanguage(event:any){
    const languageSelected: string = event.target.value
    this.languagesSelected.emit(languageSelected.toLowerCase());
  }
}
