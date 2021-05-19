import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePost, editPostSuccess, loadPosts } from "./post.actions";
import { initialState } from "./posts.state";

const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  }),
  on(editPostSuccess, (state, action) => {
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
  }),
  on(loadPosts, (state, action) => {
    return {
      ...state,
      posts: action.posts
    }
  })
);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
