import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'account-profile',
  template: `
    <h1>Profile</h1>
    <p>{{userName}}</p>
  `
})

export class AccountProfileComponent implements OnInit {
  userName: string;
  constructor() { }
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
  }
}