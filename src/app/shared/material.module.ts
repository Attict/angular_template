import { NgModule } from '@angular/core';
import { 
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
} from '@angular/material';

@NgModule({
    exports: [
        MatCardModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,
    ]
})
export class MaterialModule { }
