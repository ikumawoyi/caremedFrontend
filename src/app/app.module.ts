import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import {MatSidenavModule} from '@angular/material/sidenav'; 
import { LayoutModule } from './layout/layout.module';
import { HomesModule } from './homes/homes.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClientsModule } from './clients/clients.module';
import { MedicationsModule } from './medications/medications.module';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    LayoutModule,
    HomesModule,
    ClientsModule,
    MatDialogModule,
    MedicationsModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
