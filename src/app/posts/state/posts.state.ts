import { Post } from "src/app/models/post.model";

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [
    {
      id: "1",
      title: "Demo title 1",
      description: "Demo Description 1",
    },
    {
      id: "2",
      title: "Demo title 2",
      description: "Demo Description 2",
    },
  ],
};
