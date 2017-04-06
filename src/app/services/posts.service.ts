import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    private url = 'http://localhost:9090/posts';

    constructor(private http: Http) {
        console.log('PostsService Initialized');
    }

    createPosts(data:any) {
        console.log(data);
        let body = this.toUrlEncoded(data);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.url, body, options)
            .map(res =>  res.json());
    }

    toUrlEncoded(obj) {
        var str = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
                console.log(key + " -> " + obj[key]);
            }
        }
        return str.join("&");
    }

    readPosts() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http.get(this.url, headers).map(res => res.json());
    }

    updatePosts(data:any) {
        console.log(data);
        return this.http
            .put(this.url+'/'+data.id, JSON.stringify(data))
            .map(res => res.json());
    }

    deletePosts(data:any) {
        console.log(data);
        return this.http
            .delete(this.url+'/'+data.id)
            .map(res => res.json());
    }
}