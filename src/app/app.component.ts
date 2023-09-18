import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  numero: number = 0
  nombre = Rol.USER;


  constructor() {}
}

enum Rol {
  ADMIN = 'admin',
  USER = 'user'
}
