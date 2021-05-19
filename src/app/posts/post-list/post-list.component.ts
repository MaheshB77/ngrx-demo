import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Post } from "src/app/models/post.model";
import { AppState } from "src/app/store/app.state";
import { deletePost, getPostsFromBackend } from "../state/post.actions";
import { getPosts } from "../state/post.selectors";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getPostsFromBackend());
    this.posts$ = this.store.select(getPosts);
  }

  onDelete(postId: string) {
    console.log("Post to delete : ", postId);
    this.store.dispatch(deletePost({ id: postId }));
  }
}
