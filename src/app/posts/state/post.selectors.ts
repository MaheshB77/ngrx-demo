import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { PostState } from "./posts.state";

const getPostState = createFeatureSelector<PostState>("posts");

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostState, (state, props) => {
  let post: Post;

  post = state.posts.find((post) => post.id === props.id);
  return post;
});
