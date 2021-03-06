import { environment } from "src/environments/environment";

/**
 * Google firebase urls
 * For more info refer https://firebase.google.com/docs/reference/rest/auth
 * For more info refer https://firebase.google.com/docs/reference/rest/database
 */
export const urls = {
  signInWithEmailPassword: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
  signUpWithEmailPassword: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
  getPostsFromBackend: `https://ngrx-demo-16e79-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`,
  addPostToBackend: `https://ngrx-demo-16e79-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`,
  editPost: `https://ngrx-demo-16e79-default-rtdb.asia-southeast1.firebasedatabase.app/posts/`,
  deletePost: `https://ngrx-demo-16e79-default-rtdb.asia-southeast1.firebasedatabase.app/posts/`
};
