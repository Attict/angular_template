import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'dialog-edit-user',
    templateUrl: './edit-user.dialog.html',
    styleUrls: ['./users.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EditUserDialog {
    showPassword: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<EditUserDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    save(): void {

    }
}
