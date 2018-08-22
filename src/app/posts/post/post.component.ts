import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: string;
  title: string;
  post;

  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient) { }

  ngOnInit() {
    // Way1
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params.id;
      this.title = params.title;
      /* this.httpClient.get(`http://some/article/${params.id}`).subscribe((post: any) => {
        this.post = post;

        this.httpClient.get(`http://some/article/${post.catId}`).subscribe((cat: any) => {
          this.post.catName = cat.Name;
        });
      }); */
    });

    // Way2
    /* const getCat = params => this.httpClient.get(`http://some/article/${params.id}`);
    const mapCatToPost = (post: any) =>
      this.httpClient.get(`http://some/article/${post.catId}`).pipe(
        map((cat: any) => {
          post.catName = cat.Name;
          return post;
        }
      )
    );

    this.route.params.pipe(
      switchMap(getCat),
      switchMap(mapCatToPost)
    ).subscribe(post => {
      this.post = post;
      console.log(post.catName);
    }); */

  }

}
