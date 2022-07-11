import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CareHome, Client } from 'src/app/models';
import { ClientsService } from 'src/app/services/clients.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

  addClientForm: FormGroup = new FormGroup({});
  selectedValue: number = 0;
  clients: Client[] = [];
  careHome: CareHome[] = [];
  constructor(private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private homeService: HomeService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.homeService.listHomes().subscribe(data =>{
      this.careHome = data;
      console.log(this.careHome);
    });

    this.addClientForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'address': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'dateOfBirth': new FormControl(),
      'clientId': new FormControl(),
      'careHomeId': new FormControl(this.selectedValue)
    });
  }
  createClient(){

    this.clientsService.addClient(this.addClientForm.value).subscribe(data => {
      this._snackBar.open("Home successfully created");
    }, err => {
      this._snackBar.open("Home creation failed");
    });

    
    console.log(this.addClientForm.value);
  }

}
