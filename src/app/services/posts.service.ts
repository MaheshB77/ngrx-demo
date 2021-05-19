import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { urls } from "../constants/urls";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

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

  /**
   * Edit (Update) post
   * Response : {id: "-Ma0myfg75wkVF9aXqkk", description: "demo post 2 edited", title: "demo post 2 edited"}
   */
  editPost(post: Post): Observable<Post>{
    // Request modified is according to firebase API
    // For more info, refer https://firebase.google.com/docs/reference/rest/database#section-patch
    let url: string = urls.editPost + post.id + "/.json";

    return this.http.patch<Post>(url, post);
  }
}
