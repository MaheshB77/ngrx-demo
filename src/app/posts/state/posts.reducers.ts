import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, editPost } from "./post.actions";
import { initialState } from "./posts.state";

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  }),
  on(editPost, (state, action) => {
    let updatedPosts = state.posts.map((post) => {
      if (post.id === action.post.id) {
        return action.post;
      } else {
        return post;
      }
    });

    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePost, (state, action) => {
    let latestPosts = state.posts.filter((post) => post.id !== action.id);

    return {
      ...state,
      posts: latestPosts,
    };
  })
);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
