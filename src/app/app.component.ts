import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  `,
})
export class AppComponent  {
  name = 'John Doe';
  email = 'johnDoe@email.com';
  address = {
    street: '12 Main st',
    city: 'Bromma',
    state: 'ST'
  }
}
