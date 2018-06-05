import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { SideComponent } from './layout'

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
        SideComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
        SideComponent
    ]
})
export class SharedModule {}
