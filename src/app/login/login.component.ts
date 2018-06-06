import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EulaDialog } from './eula.dialog';
import { ForgotDialog } from './forgot.dialog';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    processing: boolean = false;
    valid: boolean = false;

    constructor(
        private formBuilder: FormBuilder, 
        private router: Router,
        public dialog: MatDialog
    ) {
        this.createForm();
    }

    ngOnInit() {}

    /// Create the form
    createForm(): void {
        this.loginForm = this.formBuilder.group({
            username: '',
            password: ''
        });
    }

    /// Validate the username and password length
    validate(): void {
        this.valid = (this.loginForm.value.username.length > 5
             && this.loginForm.value.password.length > 5);
    }

    /// Login
    signIn(): void {
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;

        if (username === "administrator" && password === "password") {
            this.processing = true;
            // TEMP: after 5 seconds goto index
            // && remove .processing and hide loader
            setTimeout(() => {
                this.router.navigate(['/home']);
            }, 3000);
        }
    }

    /// Show EULA dialog
    openEula(): void {
        let dialogRef = this.dialog.open(EulaDialog, {
            height: '800px',
            width: '90%',
            data: {
            }
        });
    }

    openForgot(): void {
        let forgotDialog = this.dialog.open(ForgotDialog, {
            height: '250px',
            width: '500px',
            data: {
            }
        });
    }
}
