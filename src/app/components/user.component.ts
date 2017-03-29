import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})

export class UserComponent  {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    buttonShowHobbyText: string;
    posts: Post[];

    constructor(private postsService: PostsService) {
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

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });

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

    deleteHobby(i) {
        this.hobbies.splice(i, 1);
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}