import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-delete-clients',
  templateUrl: './delete-clients.component.html',
  styleUrls: ['./delete-clients.component.scss']
})
export class DeleteClientsComponent implements OnInit {

  clientId: any;

  constructor(private activatedRoute: ActivatedRoute,
    private clientsService: ClientsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.clientId = data['id'];
    });

    if(this.clientId){
      this.clientsService.deleteClient(this.clientId).subscribe(data => {
        this._snackBar.open("Clien successfully deleted");
      }, err =>{
        this._snackBar.open("Client deletion failed");
      })
    }
  }

}
