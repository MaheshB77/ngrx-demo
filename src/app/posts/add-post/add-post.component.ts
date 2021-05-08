import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { AppState } from "src/app/store/app.state";
import { addPost } from "../state/post.actions";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      id: uuidv4(),
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));

    this.postForm.reset();
  }

  getTitleErrorMsg() {
    let title = this.postForm.get("title");
    if (title.touched && !title.valid) {
      if (title.errors.required) {
        return "Title is required";
      } else if (title.errors.minlength) {
        return "Minimum 6 chars required";
      }
    } else {
      return null;
    }
  }

  getDescriptionErrorMsg() {
    let description = this.postForm.get("description");

    if (description.touched && !description.valid) {
      if (description.errors.required) {
        return "Description is required";
      } else if (description.errors.minlength) {
        return "Minimum 6 chars required";
      }
    } else {
      return null;
    }
  }
}
