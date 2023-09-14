import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
   
    @Input() cLabel = 'click';
    @Input() cColor = 'primary';
    @Input() cExpand: string | undefined = undefined;
    @Input() cFill = 'solid';
    @Input() cShape = 'none';
    @Input() cDisabled = false;
    @Input() cFn = () => {};
    @Input() props: any;

    ngOnInit(): void {
      console.log(this.props);
    }
}
