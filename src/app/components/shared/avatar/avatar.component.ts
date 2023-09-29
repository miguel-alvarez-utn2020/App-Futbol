import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() label: string | number = 'label';
  @Input() srcImg: string = 'https://ionicframework.com/docs/img/demos/card-media.png';
  @Input() slot: string = 'start';
  @Input() iconName: string | undefined = undefined ;
  @Input() color: string = 'danger';
  @Input() fn = (event) => {};
}
