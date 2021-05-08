import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { AppState } from "src/app/store/app.state";
import { editPost } from "../state/post.actions";
import { getPostById } from "../state/post.selectors";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  postEditForm: FormGroup;
  post: Post;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      const id = data.get("id");

      this.store.select(getPostById, { id }).subscribe((post) => {
        this.post = post;
        this.createForm();
      });
    });
  }

  createForm() {
    this.postEditForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onEditPost() {
    if (!this.postEditForm.valid) {
      return;
    }

    const editedPost: Post = {
      id: this.post.id,
      description: this.postEditForm.value.description,
      title: this.postEditForm.value.title,
    };

    this.store.dispatch(editPost({ post: editedPost }));
  }

  getTitleErrorMsg() {
    let title = this.postEditForm.get("title");
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
    let description = this.postEditForm.get("description");
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
