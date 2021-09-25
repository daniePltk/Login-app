import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountsModalComponent } from 'src/app/modals/accounts-modal/accounts-modal.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private account: AccountService,
        private modalService: NgbModal
    ) {
        // redirect to home if already logged in
        if (this.submitted && JSON.parse(sessionStorage.getItem('success'))) {
            this.router.navigate(['/account']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/home'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (!this.loginForm.valid) {
            return;
        }

        this.loading = true;
        this.account.login(this.f.username?.value, this.f.password?.value)
            .pipe(first())
            .subscribe(
                data => {
                    sessionStorage.setItem('name', data.user.username);
                    sessionStorage.setItem('success', data.success);
                    if (data.success && data.profiles.length > 1) {
                        const modalRef = this.modalService.open(AccountsModalComponent);
                        modalRef.componentInstance.profiles = data.profiles;
                    }
                    else if (data.success && data.profiles.length == 1) {
                        this.router.navigate(['/accounts']);
                    } else {
                        this.router.navigate([this.returnUrl]);
                    }
                },
                (error: any) => {
                    console.error(error)
                },
                () => { this.loading = false });
    }
}
