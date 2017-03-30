import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
        console.log('PostsService Initialized');
    }

    getPosts() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http.get(this.url, headers).map(res => res.json());
    }

    createPosts(data) {
        console.log(data);
        return this.http
            .post(this.url, JSON.stringify(data))
            .map(res => res.json());
    }
}