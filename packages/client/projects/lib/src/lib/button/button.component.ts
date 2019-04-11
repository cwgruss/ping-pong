import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'button[cwg-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'class': 'cwg-button'
  },
  exportAs: 'cwgButton',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  constructor(elementRef: ElementRef) { }

  ngOnInit() {
    console.log('Button created');
  }

}
