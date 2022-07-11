import { AddClientsComponent } from './add-clients/add-clients.component';
import { DeleteClientsComponent } from './delete-clients/delete-clients.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'; 
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table'; 
import {DataTablesModule} from 'angular-datatables';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import { MedicationComponent } from './medication/medication.component';
import { CreateMedicationsComponent } from './create-medications/create-medications.component'





@NgModule({
  declarations: [
    ListClientsComponent,
    ViewClientsComponent,
    AddClientsComponent,
    EditClientsComponent,
    DeleteClientsComponent,
    MedicationComponent,
    CreateMedicationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    DataTablesModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    MatListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class ClientsModule { }
