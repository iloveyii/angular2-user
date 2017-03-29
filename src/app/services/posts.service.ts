import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http) {
        console.log('PostsService Initialized');
    }

    getPosts() {
        let headers = new Headers();
        headers.append('Accept:application/json');
        return this.http.get('http://localhost:8080/posts', headers).map(res => res.json());
    }
}