import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cwg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ping-pong-client';
}
