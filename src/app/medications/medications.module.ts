import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMedicationsComponent } from './list-medications/list-medications.component';
import { ViewMedicationsComponent } from './view-medications/view-medications.component';
import { AddMedicationsComponent } from './add-medications/add-medications.component';
import { EditMedicationsComponent } from './edit-medications/edit-medications.component';
import { DeleteMedicationsComponent } from './delete-medications/delete-medications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ListMedicationsComponent,
    ViewMedicationsComponent,
    AddMedicationsComponent,
    EditMedicationsComponent,
    DeleteMedicationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    DataTablesModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class MedicationsModule { }
