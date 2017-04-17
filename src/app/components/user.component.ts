import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { HobbyService } from '../services/hobby.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService, HobbyService]
})

export class UserComponent  {

    name: string;
    email: string;
    address: Address;
    hobbies: Hobby[];
    showHobbies: boolean;
    buttonShowHobbyText: string;
    posts: Post[];
    post: Post;

    constructor(private postsService: PostsService, private hobbyService: HobbyService) {
        this.name = 'Alex Kan';
        this.email = 'johnDoe@email.com';
        this.address = {
            street: '12 Main st',
            city: 'Bromma',
            state: 'ST'
        };
        this.hobbies = [
            {
                id:1,
                name:'Music'
            },
            {
                id:2,
                name:'Movies'
            },
            {
                id:3,
                name:'Sports'
            }
        ];
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
            this.hobbies.push({id:null,name:hobby});

            this.hobbyService.create(hobby).subscribe(hobbys => {
                console.log(hobbys);
            });
        }
    }

    deleteHobby(i:any) {
        this.hobbies.splice(i, 1);
    }

    addPost(title:string, body:string, userId:string) {
        let data = {
            title:title,
            body:body,
            userId:userId
        };
        this.postsService.createPosts(data).subscribe(posts => {
            console.log(posts);
            // this.posts.push(data);
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

interface Address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Hobby {
    id: number,
    name: string
}