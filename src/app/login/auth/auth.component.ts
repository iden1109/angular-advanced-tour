import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private user = {
    email: 'iden1109@gmail.com',
    password: '1234'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/', 'posts']);
  }
}
