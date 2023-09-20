import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
})
export class StartPage {
  cards = [
    {
      url: 'assets/goku.jpg',
      title: 'Goku',
      content:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure repudiandae quos, 
        ut vero qui cum ullam sunt! Commodi tempora perferendis necessitatibus perspiciatis 
        nam deserunt ex adipisci, porro et earum?`,
    },
    {
      url: 'assets/goku-2.jpg',
      title: 'Goku 2',
      content:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure repudiandae quos, 
        ut vero qui cum ullam sunt! Commodi tempora perferendis necessitatibus perspiciatis 
        nam deserunt ex adipisci, porro et earum?`,
    },
    {
      url: 'assets/iron-trunks.jpg',
      title: 'Trunks',
      content:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure repudiandae quos, 
        ut vero qui cum ullam sunt! Commodi tempora perferendis necessitatibus perspiciatis 
        nam deserunt ex adipisci, porro et earum?`,
    },
  ];
  constructor() {}
}
