import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{
  @Output() languagesSelected: EventEmitter<string> = new EventEmitter<string>();
  @Input() languages: string[] = [];
  @Input() placeholder: string | undefined = undefined
  
  constructor(private translate: TranslateService){
  }
  ngOnInit(): void {
    this.switchLanguage('es');  
  }

  switchLanguage(lang: string) {
    this.translate.use(lang); // Cambiar el idioma
  }

  selectLanguage(event:any){
    const languageSelected: string = event.target.value
    this.languagesSelected.emit(languageSelected.toLowerCase());
  }
}
