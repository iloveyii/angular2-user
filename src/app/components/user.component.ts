import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `
        <h1>{{name}}</h1>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>

        <button (click)="toggleHobbies()">{{buttonShowHobbyText}}</button>
        <div *ngIf="showHobbies">
            <h3>Hobbies</h3>
            <ul>
                <li *ngFor="let hobby of hobbies">
                {{hobby}}
                </li>
            </ul>
            <form (submit)="addHobby(hobby.value)">
                <label>Add Hobby:</label>
                <input type="text" #hobby /><br />
            </form>
        </div>

        <hr />
        <form>
            <label>Name:</label>
            <input type="text" name="name" [(ngModel)]="name" /><br />

            <label>Email:</label>
            <input type="text" name="email" [(ngModel)]="email" /><br />

            <label>City:  </label>
            <input type="text" name="address.city" [(ngModel)]="address.city" /><br />

            <label>State: </label>
            <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
        </form>
  `
})

export class UserComponent  {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    buttonShowHobbyText: string;

    constructor() {
        this.name = 'Alex Kan';
        this.email = 'johnDoe@email.com';
        this.address = {
            street: '12 Main st',
            city: 'Bromma',
            state: 'ST'
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
        this.buttonShowHobbyText = 'Show Hobbies';

    }

    toggleHobbies() {
        this.showHobbies = ! this.showHobbies;
        this.buttonShowHobbyText = this.showHobbies ? 'Hide Hobbies' : 'Show Hobbies';
    }

    addHobby(hobby) {
        if(hobby.length > 0) {
            this.hobbies.push(hobby);
        }
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}