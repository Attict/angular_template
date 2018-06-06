import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class SharedModule {}
