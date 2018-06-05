import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'dialog-eula',
    templateUrl: './eula.dialog.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EulaDialog {
    constructor(
        public dialogRef: MatDialogRef<EulaDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
}