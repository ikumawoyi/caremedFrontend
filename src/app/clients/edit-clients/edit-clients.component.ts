import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent implements OnInit {

  clientId: any;
  dataLoaded: boolean = false
  clientDetails: any;
  editClientForm: FormGroup = new FormGroup({});
  
  constructor(private activatedRoute: ActivatedRoute,
    private clientService: ClientsService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data =>{
      this.clientId = data['id'];
    });

    if(this.clientId !== ''){
      this.clientService.viewClient(this.clientId)
      .toPromise()
      .then(data => {
        this.clientDetails = data;

        this.editClientForm = this.formBuilder.group({
          'careHomeId': new FormControl(this.clientDetails.careHomeId),
          'id': new FormControl(this.clientDetails.id),
          'name': new FormControl(this.clientDetails.name),
          'address': new FormControl(this.clientDetails.address),
          'dateOfBirth': new FormControl(this.clientDetails.dateOfBirth),
          'clientId': new FormControl(this.clientDetails.contactPerson),
          'email': new FormControl(this.clientDetails.email)
      })
      this.dataLoaded = true;
    })
    .catch(err => {
      console.log(err);
    })
  }

}
updateClient(){
    this.clientService.updateClient(this.clientId, this.editClientForm.value).subscribe(data => {
      this._snackBar.open("Client successfully updated");
    }, err => {
      this._snackBar.open("Client update failed");
    });
  }

}
