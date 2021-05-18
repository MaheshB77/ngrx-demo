import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { urls } from "../constants/urls";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  /**
   * Response payload structure
    {
        "asdasd-asdb": {
            "description": "post description 2 from firebase",
            "title": "post title 2 from firebase"
        },
        "sadas-asdas": {
            "description": "post description 1 from firebase",
            "title": "post title 1 from firebase"
        },
        "vv-dsdsdcsb": {
            "description": "post description 3 from firebase",
            "title": "post title 2 from firebase"
        }
    }
   */
  getPosts(): Observable<Post[]> {
    return this.http.get(urls.getPostsFromBackend).pipe(
      map((data) => {
        let posts: Post[] = [];

        for (let key in data) {
          posts.push({ ...data[key], id: key });
        }
        return posts;
      })
    );
  }

  /**
   * Add Post to firebase realtime database
   * Response : { name: "-Ma0l-XXGQWa2DZXsy_T" }
   */
  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(urls.addPostToBackend, post);
  }
}
