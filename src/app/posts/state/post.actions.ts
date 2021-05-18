import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";

export const addPost = createAction("addPost", props<{ post: Post }>());

export const addPostSuccess = createAction("addPostSuccess", props<{ post: Post }>());

export const editPost = createAction("editPost", props<{ post: Post }>());

export const deletePost = createAction("deletePost", props<{ id: string }>());

export const getPostsFromBackend = createAction("getPostsFromBackend");

export const loadPosts = createAction("loadPosts", props<{ posts: Post[] }>());
