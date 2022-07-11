import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models';
import { Medication } from 'src/app/models/medication';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  clientId: any;
  clientName: any;
  clientMedication: any;
  constructor(private clientService: ClientsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.clientId = data['id'];
      this.clientName = data['name'];
      console.log(this.clientId);
    })
    this.clientService.medication(this.clientId).subscribe(data => {
      this.clientMedication = data;
      console.log(this.clientMedication);
    })

    this.dtOptions ={
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      data : this.clientMedication,

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
