import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@capacitor/app';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
})
export class StartPage implements OnInit{
  private store = inject(Store<AppState>)
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

  ngOnInit(): void {
    console.log('start tab');
    
  }
}
