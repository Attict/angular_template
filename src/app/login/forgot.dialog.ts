import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'dialog-forgot',
    templateUrl: './forgot.dialog.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ForgotDialog {
    constructor(
        public dialogRef: MatDialogRef<ForgotDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    submit(): void {

    }
}