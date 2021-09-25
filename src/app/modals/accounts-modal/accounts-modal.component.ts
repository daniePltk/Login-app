import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/interfaces/profile';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accounts-modal',
  templateUrl: './accounts-modal.component.html',
  styleUrls: ['./accounts-modal.component.scss']
})
export class AccountsModalComponent {

  @Input() profiles: Profile;
  constructor(public activeModal: NgbActiveModal, private router: Router) {
  }
  chooseProfile(userName: string): void {
    sessionStorage.setItem('userName', userName);
  }
}
