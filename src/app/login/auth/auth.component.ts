import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('emailDOM') emailDOM: ElementRef;
  @ViewChild('emailModel') emailModel: NgModel;

  private user = {
    email: 'iden1109@gmail.com',
    password: '1234'
  };

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.emailDOM.nativeElement);
    const elm: HTMLInputElement = this.emailDOM.nativeElement;
  }

  doLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/', 'posts']);
  }
}
