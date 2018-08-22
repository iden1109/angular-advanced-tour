import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

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
  destroy$: Subject;

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.newPost = this.fb.group({
      title: this.fb.control('test title form builder')
    });
    // this.post = this.newPost;

    // RxJS
    /* fromEvent($('test').click).subscribe(resp => {
    }); */
    const writeLog = value => this.httpClient.get('http://yahoo.com/writelog' + value);
    const valueChangeSubscription = this.post.get('title').valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      switchMap(value => this.httpClient.get('http://yahoo.com/get' + value)),
      switchMap(value => this.httpClient.get('http://yahoo.com/log' + value)),
      switchMap(writeLog)
    )
    .subscribe(value => {
      console.log(value);
    });
    valueChangeSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  createPost() {
    console.log(this.tags.value);
  }

  deleteTag() {

  }
}
