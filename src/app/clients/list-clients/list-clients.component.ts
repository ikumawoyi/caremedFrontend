import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  listClients: Client[] = [];


  constructor(private clientService: ClientsService) { }
  displayedColumns : any[] = ['name', 'email'];

  ngOnInit(){
    this.clientService.listClients().subscribe(data => {
      console.log(data);
      this.listClients = data;
    });

    this.dtOptions ={
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      data : this.listClients,

      // Set column title and data field
      columns: [
        {
          title: 'Name',
          data: 'ClientName',
        },
        {
          title: 'Email',
          data: 'ClientEmail',
        },
      ],
    };

  }

}
