import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { AccountUserComponent } from './views/accounts/account-user.component';
import { AccountProfileComponent } from './views/accounts/account-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountsModalComponent } from './modals/accounts-modal/accounts-modal.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'accounts', component: AccountsComponent, children: [
  {
    path: 'account-user', // child route path
    component: AccountUserComponent, // child route component that the router renders
  },
  {
    path: 'account-profile',
    component: AccountProfileComponent, // another child route component that the router renders
  },
]},
{ path: '', component: HomeComponent },
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [ 
    HomeComponent, LoginComponent, AccountsComponent, AccountUserComponent, AccountProfileComponent
  ],
  imports: [CommonModule,
    BrowserModule, RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,    
    NgbModule
  ],
  entryComponents: [AccountsModalComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }