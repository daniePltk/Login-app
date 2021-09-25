import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'account-user',
  template: `
    <h1>User</h1>
    <p>{{email}}</p>
  `
})
export class AccountUserComponent implements OnInit {
  email: string;
  constructor() { }
  ngOnInit(): void {
    this.email = sessionStorage.getItem('name');
  }

}