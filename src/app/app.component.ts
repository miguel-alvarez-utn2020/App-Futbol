import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private translate = inject(TranslateService);
  numero: number = 0
  nombre = Rol.USER;


  constructor() {
    this.switchLanguage();
  }

  switchLanguage() {
    const langu =  this.translate.getBrowserLang()
    console.log(langu);
    
    this.translate.use('en').subscribe(lang => {
      console.log(lang);
    }, () => {
      this.translate.use('en');
    })
  }
}

enum Rol {
  ADMIN = 'admin',
  USER = 'user'
}
