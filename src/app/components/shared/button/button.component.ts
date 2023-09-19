import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
   
    @Input() label = 'click';
    @Input() color = 'primary';
    @Input() expand: string | undefined = undefined;
    @Input() fill = 'solid';
    @Input() shape = 'none';
    @Input() disabled = false;
    @Input() fn = () => {};
    @Input() props: any;

    ngOnInit(): void {
      console.log(this.props);
    }
}
