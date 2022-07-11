import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientsComponent } from './clients/add-clients/add-clients.component';
import { CreateMedicationsComponent } from './clients/create-medications/create-medications.component';
import { DeleteClientsComponent } from './clients/delete-clients/delete-clients.component';
import { EditClientsComponent } from './clients/edit-clients/edit-clients.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { MedicationComponent } from './clients/medication/medication.component';
import { ViewClientsComponent } from './clients/view-clients/view-clients.component';
import { AddHomesComponent } from './homes/add-homes/add-homes.component';
import { DeleteHomesComponent } from './homes/delete-homes/delete-homes.component';
import { EditHomesComponent } from './homes/edit-homes/edit-homes.component';
import { ListHomesComponent } from './homes/list-homes/list-homes.component';
import { ViewHomesComponent } from './homes/view-homes/view-homes.component';
import { AddMedicationsComponent } from './medications/add-medications/add-medications.component';
import { DeleteMedicationsComponent } from './medications/delete-medications/delete-medications.component';
import { EditMedicationsComponent } from './medications/edit-medications/edit-medications.component';
import { ListMedicationsComponent } from './medications/list-medications/list-medications.component';
import { ViewMedicationsComponent } from './medications/view-medications/view-medications.component';

const routes: Routes = [
  
  
  
  {path: 'homes',
    children:[
      {path: '', component: ListHomesComponent},
      {path: 'list', component: ListHomesComponent},
      {path: 'create', component: AddHomesComponent},
      {path: 'delete/:id', component: DeleteHomesComponent},
      {path: 'view/:id', component: ViewHomesComponent},
      {path: 'edit/:id', component: EditHomesComponent}
    ]},
    {path: 'clients',
    children:[
      {path: '', component: ListClientsComponent},
      {path: 'list', component: ListClientsComponent},
      {path: 'create', component: AddClientsComponent},
      {path: 'medication/:id', component: MedicationComponent},
      {path: 'createmedication/:id', component: CreateMedicationsComponent},
      {path: 'delete/:id', component: DeleteClientsComponent},
      {path: 'view/:id', component: ViewClientsComponent},
      {path: 'edit/:id', component: EditClientsComponent}
    ]},
    {path: 'medications',
    children:[
      {path: '', component: ListMedicationsComponent},
      {path: 'list', component: ListMedicationsComponent},
      {path: 'create', component: AddMedicationsComponent},
      {path: 'delete/:id', component: DeleteMedicationsComponent},
      {path: 'view/:id', component: ViewMedicationsComponent},
      {path: 'edit/:id', component: EditMedicationsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
