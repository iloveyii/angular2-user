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
    post: Post;

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

        this.postsService.readPosts().subscribe(posts => {
            this.posts = posts;
        });

    }

    toggleHobbies() {
        this.showHobbies = ! this.showHobbies;
        this.buttonShowHobbyText = this.showHobbies ? 'Hide Hobbies' : 'Show Hobbies';
    }

    addHobby(hobby:any) {
        if(hobby.length > 0) {
            this.hobbies.push(hobby);
        }
    }

    deleteHobby(i:any) {
        this.hobbies.splice(i, 1);
    }

    addPost(title:string, body:string, userId:string) {
        this.postsService.createPosts({
            title:title,
            body:body,
            userId:userId
        }).subscribe(posts => {
            console.log(posts);
        });
    }

    updatePost(id:number, title:string, body:string, userId:number) {
        this.postsService.createPosts({
            id:id,
            title:title,
            body:body,
            userId:userId
        }).subscribe(posts => {
            console.log(posts);
        });
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