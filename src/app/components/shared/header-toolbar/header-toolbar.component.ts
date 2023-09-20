import { Component, ViewChild } from '@angular/core';
import { IonMenu, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent {
  @ViewChild('menu') menu!: IonMenu;
  constructor(private menuCrtl: MenuController){}

  async showMenu(){
    this.menuCrtl.open('noti')
  }
}
