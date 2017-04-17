import { Component } from '@angular/core';
import { UserComponent } from './components/user.component'

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li> <a routerLink="/">Home</a></li>
      <li> <a routerLink="/hobby">Hobby</a></li>
      <li> <a routerLink="/about">About</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent  {
}
