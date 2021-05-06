import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor() {}

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
    console.log(this.postForm.value);
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
