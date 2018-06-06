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
  MatTooltipModule
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
    MatTooltipModule
  ]
})
export class MaterialModule { }
