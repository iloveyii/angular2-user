import { Component } from '@angular/core';
import { HobbyService } from '../services/hobby.service';

@Component({
    moduleId: module.id,
    selector: 'hobby',
    templateUrl: 'hobby.component.html',
    providers: [HobbyService]
})

export class HobbyComponent {

    hobbies:Hobby[];
    showHobbies:boolean;
    buttonShowHobbyText:string;

    constructor(private hobbyService: HobbyService) {
        this.hobbies = [
            {
                id: 1,
                name: 'Music'
            },
            {
                id: 2,
                name: 'Movies'
            },
            {
                id: 3,
                name: 'Sports'
            }
        ];

        this.showHobbies = false;
        this.buttonShowHobbyText = 'Show Hobbies';

        this.hobbyService.read().subscribe(hobbies => {
            this.hobbies = hobbies;
        });
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
        this.buttonShowHobbyText = this.showHobbies ? 'Hide Hobbies' : 'Show Hobbies';
    }

    addHobby(hobby:any) {
        if (hobby.length > 0) {
            let h = {id: null, name: hobby};
            this.hobbies.push(h);

            this.hobbyService.create(h).subscribe(hobbys => {
                console.log(hobbys);
            });
        }
    }

    deleteHobby(i:number) {
        if(this.hobbies[i]) {
            let h = this.hobbies[i];
            this.hobbyService.delete(h).subscribe(hobbys => {
                console.log('Deleted hobby with id: '+h.id);
            });
        }

        this.hobbies.splice(i, 1);
    }
}

interface Hobby {
    id: number,
    name: string
}