import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  form = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password")
  }

  constructor() { }

  ngOnInit() {
  }

}
