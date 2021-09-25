import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simple-app';

  success: boolean;

  constructor() { }
  ngOnInit(): void {

    this.success = JSON.parse(sessionStorage.getItem('success'));
  }
}