import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { PostsService } from "src/app/services/posts.service";
import { getPostsFromBackend, loadPosts } from "./post.actions";

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
}
