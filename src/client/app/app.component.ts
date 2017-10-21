import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ title }}</h2>
    <app-login></app-login>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Kitten Working Bruh-bruh!!!';
}
