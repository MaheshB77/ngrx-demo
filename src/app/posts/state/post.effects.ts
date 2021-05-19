import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { Post } from "src/app/models/post.model";
import { PostsService } from "src/app/services/posts.service";
import {
  addPost,
  addPostSuccess,
  editPost,
  editPostSuccess,
  getPostsFromBackend,
  loadPosts,
} from "./post.actions";

@Injectable({
  providedIn: "root",
})
export class PostEffects {
  constructor(private action$: Actions, private postsService: PostsService) {}

  getPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getPostsFromBackend),
      exhaustMap((action) => {
        return this.postsService.getPosts().pipe(
          map((data) => {
            return loadPosts({ posts: data });
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addPost),
      exhaustMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            let post: Post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });

  editPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(editPost),
      exhaustMap((action) => {
        return this.postsService.editPost(action.post).pipe(
          map((data) => {
            return editPostSuccess({ post: data });
          })
        );
      })
    );
  });
}
