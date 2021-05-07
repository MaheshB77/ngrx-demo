import { createReducer, on } from "@ngrx/store";
import { addPost } from "./post.actions";
import { initialState } from "./posts.state";

const _postReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  })

);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
