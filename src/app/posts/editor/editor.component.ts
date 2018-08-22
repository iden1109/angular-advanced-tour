import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  post = new FormGroup({
    title: new FormControl('test title', [Validators.required, Validators.minLength(10)]),
    body: new FormControl('test'),
    tags: new FormArray([
      new FormControl('HTML'),
      new FormControl('CSS'),
      new FormControl('jQuery')
    ])
  });

  newPost: FormGroup;

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newPost = this.fb.group({
      title: this.fb.control('test title form builder')
    });
    // this.post = this.newPost;
  }

  createPost() {
    console.log(this.tags.value);
  }

  deleteTag() {

  }
}
