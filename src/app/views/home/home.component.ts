import { Component, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/UserData';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;
  success: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setUserLogedData();
  }

  setUserLogedData() {
    this.name = sessionStorage.getItem('name');
    this.success = JSON.parse(sessionStorage.getItem('success'));
  }
  removeUserLogedData() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('success');
  }

  logOut() {
    this.removeUserLogedData();
    this.router.navigate(['/']);
  }
}

