import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHomesComponent } from './list-homes/list-homes.component';
import { ViewHomesComponent } from './view-homes/view-homes.component';
import { AddHomesComponent } from './add-homes/add-homes.component';
import { EditHomesComponent } from './edit-homes/edit-homes.component';
import { DeleteHomesComponent } from './delete-homes/delete-homes.component';
import {MatListModule} from '@angular/material/list'; 
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table'; 
import {DataTablesModule} from 'angular-datatables';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar'



@NgModule({
  declarations: [
    ListHomesComponent,
    ViewHomesComponent,
    AddHomesComponent,
    EditHomesComponent,
    DeleteHomesComponent
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
export class HomesModule { }
