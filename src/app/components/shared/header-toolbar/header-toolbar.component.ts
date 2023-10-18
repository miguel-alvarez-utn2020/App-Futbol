import { Component, Input, ViewChild, inject } from '@angular/core';
import { IonMenu, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent {
  private menuCrtl = inject(MenuController)
  @Input() imgUrl: string = 'assets/avatar.png'
  @ViewChild('menu') menu!: IonMenu;
  constructor(){}

  async showMenu(){
    this.menuCrtl.enable(true, 'menu');
    this.menuCrtl.open('menu');
  }
  async showMenu2(){
    this.menuCrtl.enable(true, 'menu2');
    this.menuCrtl.open('menu2');
  }
}
